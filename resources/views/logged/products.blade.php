@extends('layouts.logged.master')

@section('css')
	<link rel="stylesheet" href="../css/logged/products.css">
@endsection

@section('content')
<br>
	<div class="search">
		<input type="text" class="search_all form-control" placeholder="Search product name"><br>

		<span class="from_price">
			From
			<input type="text" class="from form-control" placeholder="Search price..">
		</span>
		&nbsp;&nbsp;
		<span class="to_price">
			To
			<input type="text" class="to form-control">
		</span><br>
		&nbsp;
		<button class="search_price btn btn-success">Search</button>
	</div>
	<br><br>
	<div class="product_lists">
		<table id="product_table" number-per-page="10" current-page="0">
			<tbody></tbody>
		</table>
	</div>

@endsection

@section('js')
	<script src="../js/logged/loggedProducts.js"></script>
	<script src="../js/library/simplepagination.js"></script>
@endsection
