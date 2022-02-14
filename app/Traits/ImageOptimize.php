<?php
namespace App\Traits;

use Illuminate\Support\Facades\Storage;
use Spatie\ImageOptimizer\OptimizerChainFactory;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
trait ImageOptimize
{
    protected $EXTENSIONS = ['jpg', 'png', 'gif', 'webp', 'jpeg'];
    public function saveImage($file, String $path, $width = 640, $height = 480)
    {
        if(!in_array($file->getClientOriginalExtension(), $this->EXTENSIONS)) return false;
        $path = "/images/$path";
        $optimizerChain = OptimizerChainFactory::create();
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $img = Image::make($file->getRealPath());
        if($width != null && $height != null) {
            $img->resize($width, $height);
        }
        $img->encode('jpg', 70);
        Storage::disk()->put($path . $filename, $img, 'public');
        $storagePath = Storage::disk()->getDriver()->getAdapter()->getPathPrefix().$path.$filename;
        $optimizerChain->optimize($storagePath);
        return $path . $filename;
    }

    public function updateImage($newFile, $oldFile, String $path, Int $width = 640, Int $height = 480)
    {
        if(!in_array($newFile->getClientOriginalExtension(), $this->EXTENSIONS)) return false;
        $optimizerChain = OptimizerChainFactory::create();
        $path = "/images/$path";
        Storage::disk()->delete($oldFile);
        $filename = Str::uuid() . '.' . $newFile->getClientOriginalExtension();
        $img = Image::make($newFile->getRealPath());
        $img->resize($width, $height);
        $img->encode('jpg', 70);
        Storage::disk()->put($path . $filename, $img, 'public');
        $storagePath = Storage::disk()->getDriver()->getAdapter()->getPathPrefix().$path.$filename;
        $optimizerChain->optimize($storagePath);
        return $path . $filename;
    }

    public function deleteImage($pathFile)
    {
        try {
            Storage::disk()->delete($pathFile);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}