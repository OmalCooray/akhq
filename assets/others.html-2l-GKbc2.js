import{_ as i,r,o as s,c,b as e,d as o,a as n,w as d,e as l}from"./app-3hsIIcJC.js";const u={},h=e("h1",{id:"others",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#others","aria-hidden":"true"},"#"),o(" Others")],-1),p=e("h2",{id:"server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#server","aria-hidden":"true"},"#"),o(" Server")],-1),f=e("code",null,"micronaut.server.context-path",-1),m={href:"http://my-server/akhq",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,'context-path: "/akhq"',-1),g={href:"http://akhq.my-server/",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"kafka-admin-producer-consumer-default-properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kafka-admin-producer-consumer-default-properties","aria-hidden":"true"},"#"),o(" Kafka admin / producer / consumer default properties")],-1),b=e("code",null,"akhq.clients-defaults.{{admin|producer|consumer}}.properties",-1),k={href:"https://kafka.apache.org/documentation/",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"micronaut-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#micronaut-configuration","aria-hidden":"true"},"#"),o(" Micronaut configuration")],-1),q={href:"https://micronaut.io/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.micronaut.io/snapshot/guide/configurationreference.html#io.micronaut.http.server.HttpServerConfiguration",target:"_blank",rel:"noopener noreferrer"},N={href:"https://docs.micronaut.io/snapshot/guide/index.html#config",target:"_blank",rel:"noopener noreferrer"},S=l(`<h2 id="json-logging" tabindex="-1"><a class="header-anchor" href="#json-logging" aria-hidden="true">#</a> JSON Logging</h2><p>In order to configure AKHQ to output log in JSON format, a logback configuration needs to be provided, e.g. <code>logback.xml</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;configuration&gt;
  &lt;appender name=&quot;stdout&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
    &lt;encoder class=&quot;ch.qos.logback.classic.encoder.JsonEncoder&quot;&gt;
    &lt;/encoder&gt;
  &lt;/appender&gt;

  &lt;root level=&quot;debug&quot;&gt;
    &lt;appender-ref ref=&quot;stdout&quot;/&gt;
  &lt;/root&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w=e("code",null,"/app/logback.xml",-1),A=e("code",null,"JAVA_OPTS",-1),E=e("code",null,"-Dlogback.configurationFile=/app/logback.xml",-1);function L(M,V){const t=r("ExternalLinkIcon"),a=r("RouterLink");return s(),c("div",null,[h,p,e("ul",null,[e("li",null,[f,o(": if behind a reverse proxy, path to akhq without trailing slash (optional). Example: akhq is behind a reverse proxy with url "),e("a",m,[o("http://my-server/akhq"),n(t)]),o(", set "),_,o(". Not needed if you're behind a reverse proxy with subdomain "),e("a",g,[o("http://akhq.my-server/"),n(t)])])]),v,e("ul",null,[e("li",null,[b,o(": default configuration for admin producer or consumer. All properties from "),e("a",k,[o("Kafka documentation"),n(t)]),o(" is available.")])]),x,e("blockquote",null,[e("p",null,[o("Since AKHQ is based on "),e("a",q,[o("Micronaut"),n(t)]),o(", you can customize configurations (server port, ssl, ...) with "),e("a",y,[o("Micronaut configuration"),n(t)]),o(". More information can be found on "),e("a",N,[o("Micronaut documentation"),n(t)])])]),S,e("p",null,[o("This file then needs to be mounted to "),w,o(" and referenced in "),A,o(" via "),E,o(" (see "),n(a,{to:"/docs/configuration/docker.html"},{default:d(()=>[o("docker")]),_:1}),o(" for more information).")])])}const J=i(u,[["render",L],["__file","others.html.vue"]]);export{J as default};
