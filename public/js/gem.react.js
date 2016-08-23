'use strict';

var Page = React.createClass({
	render: function() {
		return (
			<div>
				<Nav />
				<Content />
			</div>
		);
	}
});

var Nav = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-static-top">
				<div className="container-fluid">
					<NavBarHeader />
					<NavBar />
				</div>
			</nav>
//			React.createElement('nav', {className: "navbar navbar-static-top"})
		);
	}
});

var NavBarHeader = React.createClass({
	render: function() {
		return (
				
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand" href="#">
					<img src="img/logo-gem.png" className="logo" alt="Gem" />
				</a>
			</div>
		);
	}
});

var NavBar = React.createClass({
	render: function() {
		return (
			<div id="navbar" className="navbar-collapse collapse">
				<NavBarLinks />
				<NavBarLinksRight />
			</div>
		);
	}
});

var NavBarLinks = React.createClass({
	render: function() {
		return (
				<ul className="nav-links nav navbar-nav navbar-left">
					<li><a href="patients.html">Patients</a></li>
					<li><a href="claims.html">Claims</a></li>
					<li><a href="directories.html">Directories</a></li>
					<li><a href="settings.html">Settings</a></li>
					<li><a href="leads.html">Leads</a></li>
				</ul>
		);
	}
});

var NavBarLinksRight = React.createClass({
	render: function() {
		return (
				
				<ul className="nav navbar-nav navbar-right">
					<li>
						<a href="#" className="icon-search">
							<img src="img/icon-search.png" className="" alt="Search" />
						</a>
					</li>
					<li>
						<a className="avatar" href="#">
							<img src="img/avatar.png" className="" alt="Account" />
						</a>
					</li>
				</ul>
		);
	}
});

var Content = React.createClass({
	render: function() {
		return (
			<Section />
		);
	}
});

var Section = React.createClass({
	render: function() {
		return (
			<section>
				<SectionHeader />
				<SectionBody />
			</section>
		);
	}
});

var SectionHeader = React.createClass({
	render: function() {
		return (

			<header className="container page-header">
				<div className="row">
					<div className="col-sm-12">
						<ol className="breadcrumb">
							<li><a href="claims.html">Claims</a></li>
							<li className="active">All</li>
						</ol>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<h1 className="page-title pull-left">Claims</h1>
						<a href="claims-create-new.html" className="btn btn-primary pull-right">+ Create New Claim</a>
					</div>
				</div>
			</header>
		);
	}
});

var SectionBody = React.createClass({
	render: function() {
		return (
				<section className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="table-responsive">
								<table className="table box">
									<thead>
										<tr>
											<th>Document</th>
											<th>Document Name</th>
											<th>Permissions</th>
											<th>Last Modified Date</th>
											<th align="center">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><a href="claims-individual.html">1212</a></td>
											<td>Doc 4567</td>
											<td>Read</td>
											<td>June 22, 2016 10:00AM</td>
											<td align="center">
												<a href="#" className="icon-ellipsis"><img src="img/icon-ellipsis.png" /></a>
												<div className="actions-menu hidden">
													<a href="#" className="icon-duplicate"><img src="img/icon-duplicate.png" /></a>
													<a href="#" className="icon-trash"><img src="img/icon-trash.png" /></a>
												</div>
											</td>
										</tr>
										<tr>
											<td><a href="claims-individual.html">2222</a></td>
											<td>Doc 2345</td>
											<td>Read</td>
											<td>June 21, 2016 11:11AM</td>
											<td align="center">
												<a href="#" className="icon-ellipsis"><img src="img/icon-ellipsis.png" /></a>
												<div className="actions-menu hidden">
													<a href="#" className="icon-duplicate"><img src="img/icon-duplicate.png" /></a>
													<a href="#" className="icon-trash"><img src="img/icon-trash.png" /></a>
												</div>
											</td>
										</tr>
										<tr>
											<td><a href="claims-individual.html">3333</a></td>
											<td>Doc 6789</td>
											<td>Read</td>
											<td>June 20, 2016 9:14AM</td>
											<td align="center">
												<a href="#" className="icon-ellipsis"><img src="img/icon-ellipsis.png" /></a>
												<div className="actions-menu hidden">
													<a href="#" className="icon-duplicate"><img src="img/icon-duplicate.png" /></a>
													<a href="#" className="icon-trash"><img src="img/icon-trash.png" /></a>
												</div>
											</td>
										</tr>
										<tr>
											<td><a href="claims-individual.html">4444</a></td>
											<td>Doc 4567</td>
											<td>Read</td>
											<td>June 19, 2016 10:02AM</td>
											<td align="center">
												<a href="#" className="icon-ellipsis"><img src="img/icon-ellipsis.png" /></a>
												<div className="actions-menu hidden">
													<a href="#" className="icon-duplicate"><img src="img/icon-duplicate.png" /></a>
													<a href="#" className="icon-trash"><img src="img/icon-trash.png" /></a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
		);
	}
});


ReactDOM.render(
	React.createElement(Page, null),
	document.getElementById('body')
);





