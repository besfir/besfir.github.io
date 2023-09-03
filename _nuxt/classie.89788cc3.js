/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */(function(f){function c(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}let e,a,t;"classList"in document.documentElement?(e=function(s,n){return s.classList.contains(n)},a=function(s,n){s.classList.add(n)},t=function(s,n){s.classList.remove(n)}):(e=function(s,n){return c(n).test(s.className)},a=function(s,n){e(s,n)||(s.className=s.className+" "+n)},t=function(s,n){s.className=s.className.replace(c(n)," ")});function i(s,n){(e(s,n)?t:a)(s,n)}const o={hasClass:e,addClass:a,removeClass:t,toggleClass:i,has:e,add:a,remove:t,toggle:i};typeof define=="function"&&define.amd?define(o):f.classie=o})(window);
