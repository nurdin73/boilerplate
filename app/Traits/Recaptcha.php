<?php
namespace App\Traits;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

trait Recaptcha 
{
  public function urlVerify()
  {
    return env('URL_VERIFY_CAPTCHA', 'https://www.google.com/recaptcha/api/siteverify');
  }

  public function verify(String $token)
  {
    $body = [
      'secret' => config('services.captcha.secret_key'),
      'response' => $token,
      'remoteip' => request()->ip()
    ];
    $curl = curl_init();
    curl_setopt_array($curl,[
      CURLOPT_RETURNTRANSFER => 1,
      CURLOPT_URL => $this->urlVerify(),
      CURLOPT_POST => 1,
      CURLOPT_POSTFIELDS => $body,
    ]);
    $response = curl_exec($curl) ;

    curl_close($curl);

    $json = json_decode($response,true);
    if(!$json['success']) return false;
    return $json['success'];
  }
}