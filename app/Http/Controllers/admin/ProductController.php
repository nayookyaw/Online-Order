<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Log;
use Auth;

class ProductController extends Controller
{
    public function getAll()
		{
			$products = DB::table('products')->get();

			return view('/tmp/productTmpl', compact('products', $products));
		}

		public function getDetail(Request $input, $id)
		{
			$product_id = $id;

			$product = DB::table('products')->where('id', $product_id)->first();

			return view('/admin/productDetail', compact('product', $product));
		}
}