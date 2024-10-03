docs(core): deprecate providedIn: NgModule and providedIn: 'any'

services available options:  
provideIn: 'root'
provideIn: null   (the same as @injectable() - no provideIn config key)


Services injected in components look for any instance creation request in providers associated to the same component or their
parents, grandparents, etc... till reaching for a provideIn:'root' service decorator option.

services provided in root will create a new instance if provided in any component