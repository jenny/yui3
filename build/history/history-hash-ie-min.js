YUI.add("history-hash-ie",function(G){if(G.UA.ie&&!G.HistoryBase.nativeHashChange){var C=G.Do,D=YUI.namespace("Env.HistoryHash"),B=G.HistoryHash,E=D._iframe,F=G.config.win,A=F.location;B.getHash=function(){var H=B.hashPrefix,I=E?E.contentWindow.location.hash.substr(1):A.hash.substr(1);return H&&I.indexOf(H)===0?I.replace(H,""):I;};B.getUrl=function(){var H=B.getHash();if(H&&H!==A.hash.substr(1)){return A.href.replace(/#.*$/,"")+"#"+H;}else{return A.href;}};B._updateIframe=function(I,H){var J=E.contentWindow.document,K=J.location;J.open().close();if(H){K.replace(I.charAt(0)==="#"?I:"#"+I);}else{K.hash=I;}};C.after(B._updateIframe,B,"replaceHash",B,true);C.after(B._updateIframe,B,"setHash");if(!E){G.on("domready",function(){E=D._iframe=G.Node.getDOMNode(G.Node.create('<iframe src="javascript:0" style="display:none" height="0" width="0" tabindex="-1" title="empty"/>'));G.config.doc.documentElement.appendChild(E);B._updateIframe(A.hash.substr(1));});G.on("hashchange",function(H){if(A.hash.substr(1)!==H.newHash){A.hash=H.newHash;}},F);}}},"@VERSION@",{requires:["history-hash","node-base"]});