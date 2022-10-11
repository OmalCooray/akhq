import{_ as t,r as n,o as r,c,b as a,d as e,a as s,w as l,e as d}from"./app.c19e6146.js";const u={},v=a("h1",{id:"avro-deserialization",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#avro-deserialization","aria-hidden":"true"},"#"),e(" Avro deserialization")],-1),m={href:"https://avro.apache.org/docs/current/api/java/org/apache/avro/io/DatumWriter.html",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"schemas-folder",-1),p=a("code",null,"topic-regex",-1),_=a("code",null,"key-schema-file",-1),f=a("code",null,"value-schema-file",-1),b=d(`<p>Here is an example of configuration:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>akhq:
  connections:
    kafka:
      properties:
        # standard kafka properties
        avro-raw:
          schemas-folder: &quot;/app/avro_schemas&quot;
          topics-mapping:
            - topic-regex: &quot;album.*&quot;
              value-schema-file: &quot;Album.avsc&quot;
            - topic-regex: &quot;film.*&quot;
              value-schema-file: &quot;Film.avsc&quot;
            - topic-regex: &quot;test.*&quot;
              key-schema-file: &quot;Key.avsc&quot;
              value-schema-file: &quot;Value.avsc&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={href:"https://github.com/tchiotludo/akhq/tree/dev/src/main/java/org/akhq/utils",target:"_blank",rel:"noopener noreferrer"};function k(q,x){const o=n("RouterLink"),i=n("ExternalLinkIcon");return r(),c("div",null,[v,a("p",null,[e("Avro messages using Schema registry are automatically decoded if the registry is configured (see "),s(o,{to:"/docs/configuration/brokers.html"},{default:l(()=>[e("Kafka cluster")]),_:1}),e(").")]),a("p",null,[e("You can also decode raw binary Avro messages, that is messages encoded directly with "),a("a",m,[e("DatumWriter"),s(i)]),e(" without any header. You must provide a "),h,e(" and mappings which associate a "),p,e(" and a schema file name. The schema can be specified either for message keys with "),_,e(" and/or for values with "),f,e(".")]),b,a("p",null,[e("Examples can be found in "),a("a",g,[e("tests"),s(i)]),e(".")])])}const w=t(u,[["render",k],["__file","avro.html.vue"]]);export{w as default};
