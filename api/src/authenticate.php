<?php


    use FirebaseJWT\JWT;

    /**
     * Authenticate username and password
     *
     * This class checks a username and password against the data in the database.
     * If the authentication is successful, it will return a JWT.
     *
     * @author Kelsey Andrews, John Rooksby
     */
class Authenticate extends Endpoint
{
    public function __construct()
    {
        $db = new Database("db/chiplay.sqlite");
        $this->validateRequestMethod("POST");
        $this->validateAuthParameters();

        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        $this->validateUsername($queryResult);
        $this->validatePassword($queryResult);

        $data['token'] = $this->createJWT($queryResult);

        $this->setData(array(
            "length" => 0,
            "message" => "Successful",
            "data" => $data
        ));
    }

    private function validateRequestMethod($method)
    {
        if ($_SERVER['REQUEST_METHOD'] != $method) {
            throw new ClientErrorException("Invalid Request Method", 405);
        }
    }

    private function validateAuthParameters()
    {
        if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) {
            throw new ClientErrorException("username and password required", 401);
        }
    }

    protected function initialiseSQL()
    {
        $sql = "SELECT account_id, username, password FROM account WHERE username = :username";
        $this->setSQL($sql);
        $this->setSQLParams(['username' => $_SERVER['PHP_AUTH_USER']]);
    }

    private function validateUsername($queryResult)
    {
        if (count($queryResult) != 1) {
            throw new ClientErrorException("invalid credentials", 401);
        }
    }

    private function validatePassword($data)
    {
        if (!password_verify($_SERVER['PHP_AUTH_PW'], $data[0]['password'])) {
            throw new ClientErrorException("invalid credentials", 401);
        }
    }

    private function createJWT($queryResult)
    {
        $secretKey = SECRET;

        $time = time();

        $tokenPayload = [
            'iat' => $time,
            'exp' => strtotime('+1 day', $time),
            'iss' => $_SERVER['HTTP_HOST'],
            'sub' => $queryResult
        ];

        $jwt = JWT::encode($tokenPayload, $secretKey, 'HS256');

        return $jwt;
    }
}