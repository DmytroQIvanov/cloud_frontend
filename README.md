
### Subdomains

> #### storage.quanticfiles.com - For file storage functionality
> #### transfer.quanticfiles.com - For file transfer functionality
> #### image.quanticfiles.com - For image functionality
> #### cloud.quanticfiles.com - For cloud functionality


### File structure
* >_components
  * **ReComponents** - All reusable components like input, button
  * **Wrapper**
    * ... All components used in the Wrapper (Header, Footer, Sidebar, etc...)
  * ... Other components
* >app
  * **[locale]** - Main directory
    * storage - [SUBDOMAIN] -- storage.quanticfiles.com
    * transfer - [SUBDOMAIN] -- transfer.quanticfiles.com
    * image - [SUBDOMAIN] -- image.quanticfiles.com
    * cloud - [SUBDOMAIN] -- cloud.quanticfiles.com
    * instruments - all instruments
    * ... Other pages
  * **dictionaries** - All language functionality and text [en / ua]
* >Functions 