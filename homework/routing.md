app.routing.module.ts

	Routes[] = [
		{ path: 'url-fragment', component: MyComponent }
	]

app.routes.names.ts
	appRoutesNames = {
		URL-FRAGMENT: 'url-fragment'
	}

<button [routerLink]="[ '/', appRoutesNames.URL-FRAGMENT ]">Hello