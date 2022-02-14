<?php
namespace App\Traits;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

trait Cpanel
{
  public function baseURL()
  {
    return property_exists($this, 'baseURL') ? $this->baseURL : env('CPANEL_BASE_URL', 'base_url');
  }
  public function username()
  {
    return property_exists($this, 'username') ? $this->username : env('CPANEL_USERNAME', 'username');
  }

  public function apiToken()
  {
    return property_exists($this, 'apiToken') ? $this->apiToken : env('CPANEL_API_TOKEN', 'api_token');
  }

  public function url()
  {
    return property_exists($this, 'url') ? $this->url : "";
  }

  public function headers()
  {
    $username = $this->username() . ':' . $this->apiToken();
    $headers = [
      'Authorization' => "cpanel $username",
      "Content-Type" => "application/json"
    ];
    return $headers;
  }

  public function get(String $params = '')
  {
    $params = $params != '' ? "?$params" : '';
    $url = $this->baseURL() . $this->url() . $params;
    Log::info($url);
    $request = new Request('GET', $url, $this->headers());
    $promise = $this->client()->sendRequest($request);
    return json_decode($promise->getBody()->getContents()); 
  }

  protected function client()
  {
    return new Client(['verify' => false]);
  }
}