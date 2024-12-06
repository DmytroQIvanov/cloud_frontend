# Quantic files - Fullstack project

## Main dependencies (Frontend)
* > Next Js
* > i18next
* > sass 
* > Redux


## Installation & Start
> pnpm install && pnpm run dev

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
    * globals.scss - global styles like "prevent-select"
    * Styles 
      * colors.scss - project colors
      * mixins.scss - project mixins
      * screens.scss - project screens
    * ... Other pages
  * **dictionaries** - All language functionality and text [en / ua]
* >Functions
* >Middleware

