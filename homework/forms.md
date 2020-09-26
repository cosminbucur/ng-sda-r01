template driven form

	html
		html form
			- onSubmit()
			- input
				[(ngModel)]="modelFromTypescript"
			- button
		restrictions

	ts
		form reference
		modelFromTypescript


model driven forms
	
	html
		formGroup
		input
			formGroupName

	ts
		formGroup reference
			formControl
			validators