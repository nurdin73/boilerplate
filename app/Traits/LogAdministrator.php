<?php
namespace App\Traits;

use App\Models\HistoryAdministrator;
use Illuminate\Support\Facades\Log;

trait LogAdministrator
{
    public function logged(String $msg)
    {
        if(request()->user()) {
            $log = HistoryAdministrator::create([
                'admin_id' => request()->user()->id,
                'log' => $msg,
                'created_at' => now()
            ]);
        }
    }
}