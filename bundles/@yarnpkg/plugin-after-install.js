/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-after-install",
factory: function (require) {
"use strict";var plugin=(()=>{var K=Object.create;var m=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty;var u=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var D=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),S=(e,t)=>{for(var r in t)m(e,r,{get:t[r],enumerable:!0})},I=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of P(t))!Y.call(e,a)&&a!==r&&m(e,a,{get:()=>t[a],enumerable:!(o=L(t,a))||o.enumerable});return e};var M=(e,t,r)=>(r=e!=null?K(R(e)):{},I(t||!e||!e.__esModule?m(r,"default",{value:e,enumerable:!0}):r,e)),U=e=>I(m({},"__esModule",{value:!0}),e);var x=D((ge,F)=>{F.exports={name:"dotenv",version:"16.4.5",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},funding:"https://dotenvx.com",keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3",decache:"^4.6.1",sinon:"^14.0.1",standard:"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0",tap:"^16.3.0",tar:"^6.1.11",typescript:"^4.8.4"},engines:{node:">=12"},browser:{fs:!1}}});var j=D((me,f)=>{var E=u("fs"),y=u("path"),B=u("os"),q=u("crypto"),W=x(),_=W.version,H=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function G(e){let t={},r=e.toString();r=r.replace(/\r\n?/mg,`
`);let o;for(;(o=H.exec(r))!=null;){let a=o[1],n=o[2]||"";n=n.trim();let s=n[0];n=n.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),s==='"'&&(n=n.replace(/\\n/g,`
`),n=n.replace(/\\r/g,"\r")),t[a]=n}return t}function J(e){let t=A(e),r=c.configDotenv({path:t});if(!r.parsed){let s=new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);throw s.code="MISSING_DATA",s}let o=O(e).split(","),a=o.length,n;for(let s=0;s<a;s++)try{let i=o[s].trim(),l=X(r,i);n=c.decrypt(l.ciphertext,l.key);break}catch(i){if(s+1>=a)throw i}return c.parse(n)}function Q(e){console.log(`[dotenv@${_}][INFO] ${e}`)}function z(e){console.log(`[dotenv@${_}][WARN] ${e}`)}function h(e){console.log(`[dotenv@${_}][DEBUG] ${e}`)}function O(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function X(e,t){let r;try{r=new URL(t)}catch(i){if(i.code==="ERR_INVALID_URL"){let l=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw l.code="INVALID_DOTENV_KEY",l}throw i}let o=r.password;if(!o){let i=new Error("INVALID_DOTENV_KEY: Missing key part");throw i.code="INVALID_DOTENV_KEY",i}let a=r.searchParams.get("environment");if(!a){let i=new Error("INVALID_DOTENV_KEY: Missing environment part");throw i.code="INVALID_DOTENV_KEY",i}let n=`DOTENV_VAULT_${a.toUpperCase()}`,s=e.parsed[n];if(!s){let i=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${n} in your .env.vault file.`);throw i.code="NOT_FOUND_DOTENV_ENVIRONMENT",i}return{ciphertext:s,key:o}}function A(e){let t=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(let r of e.path)E.existsSync(r)&&(t=r.endsWith(".vault")?r:`${r}.vault`);else t=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else t=y.resolve(process.cwd(),".env.vault");return E.existsSync(t)?t:null}function T(e){return e[0]==="~"?y.join(B.homedir(),e.slice(1)):e}function Z(e){Q("Loading env from encrypted .env.vault");let t=c._parseVault(e),r=process.env;return e&&e.processEnv!=null&&(r=e.processEnv),c.populate(r,t,e),{parsed:t}}function ee(e){let t=y.resolve(process.cwd(),".env"),r="utf8",o=Boolean(e&&e.debug);e&&e.encoding?r=e.encoding:o&&h("No encoding is specified. UTF-8 is used by default");let a=[t];if(e&&e.path)if(!Array.isArray(e.path))a=[T(e.path)];else{a=[];for(let l of e.path)a.push(T(l))}let n,s={};for(let l of a)try{let d=c.parse(E.readFileSync(l,{encoding:r}));c.populate(s,d,e)}catch(d){o&&h(`Failed to load ${l} ${d.message}`),n=d}let i=process.env;return e&&e.processEnv!=null&&(i=e.processEnv),c.populate(i,s,e),n?{parsed:s,error:n}:{parsed:s}}function te(e){if(O(e).length===0)return c.configDotenv(e);let t=A(e);return t?c._configVault(e):(z(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`),c.configDotenv(e))}function re(e,t){let r=Buffer.from(t.slice(-64),"hex"),o=Buffer.from(e,"base64"),a=o.subarray(0,12),n=o.subarray(-16);o=o.subarray(12,-16);try{let s=q.createDecipheriv("aes-256-gcm",r,a);return s.setAuthTag(n),`${s.update(o)}${s.final()}`}catch(s){let i=s instanceof RangeError,l=s.message==="Invalid key length",d=s.message==="Unsupported state or unable to authenticate data";if(i||l){let p=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw p.code="INVALID_DOTENV_KEY",p}else if(d){let p=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw p.code="DECRYPTION_FAILED",p}else throw s}}function ne(e,t,r={}){let o=Boolean(r&&r.debug),a=Boolean(r&&r.override);if(typeof t!="object"){let n=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw n.code="OBJECT_REQUIRED",n}for(let n of Object.keys(t))Object.prototype.hasOwnProperty.call(e,n)?(a===!0&&(e[n]=t[n]),o&&h(a===!0?`"${n}" is already defined and WAS overwritten`:`"${n}" is already defined and was NOT overwritten`)):e[n]=t[n]}var c={configDotenv:ee,_configVault:Z,_parseVault:J,config:te,decrypt:re,parse:G,populate:ne};f.exports.configDotenv=c.configDotenv;f.exports._configVault=c._configVault;f.exports._parseVault=c._parseVault;f.exports.config=c.config;f.exports.decrypt=c.decrypt;f.exports.parse=c.parse;f.exports.populate=c.populate;f.exports=c});var ae={};S(ae,{default:()=>se});var C=u("@yarnpkg/core");var N=u("@yarnpkg/core"),b={afterInstall:{description:"Hook that will always run after install",type:N.SettingsType.STRING,default:""}};var V=u("clipanion"),k=u("@yarnpkg/core");var w=u("@yarnpkg/shell"),v=async(e,t)=>{let r=e.get("afterInstall"),o=!!e.projectCwd?.endsWith(`dlx-${process.pid}`);return r&&!o?(t&&console.log("Running `afterInstall` hook..."),(0,w.execute)(r,[],{cwd:e.projectCwd||void 0})):0};var g=class extends V.Command{async execute(){let t=await k.Configuration.find(this.context.cwd,this.context.plugins);return v(t,!1)}};g.paths=[["after-install"]];var $=M(j()),oe={configuration:b,commands:[g],hooks:{afterAllInstalled:async(e,t)=>{(0,$.config)();let r=process.env.CI==="true";if(t?.mode===C.InstallMode.UpdateLockfile||r){console.log("Skipping `afterInstall` hook because we are in CI or the mode is `update-lockfile`");return}if(await v(e.configuration,!0))throw new Error("The `afterInstall` hook failed, see output above.")}}},se=oe;return U(ae);})();
return plugin;
}
};
