@extends('layouts.app')

@section('content')
<br><br><br><br>
<div class="content">
	<h4>TOP</h4>
	<hr>
	<div class="action">
		<button class="products btn btn-warning"><a href="/admin/products">Products</a></button>
		<button class="orders btn btn-info"><a href="/admin/orders">Orders</a></button>
	</div>

	<h4>Daily Overview</h4>
	<hr>

	<table border="1">
		<tr>
			<td>Customer Name</td>
			<td>Total</td>
		</tr>
	</table>
</div>
@endsection