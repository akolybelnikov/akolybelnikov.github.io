����Archive�� 

ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified GoLinknames�� 	BuildTime��   ��[]string��   ��[]*compiler.Decl�� ��  ������ FullName LinkingName�� Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   *��SymName�� PkgPath Name   $��[]compiler.GoLinkname�� ��  ;��
GoLinkname�� Implementation�� 	Reference��   ��Time��   ����container/ringring�iN�n RingnextprevValueinitrNextPrevMoveLinksUnlinkLenDofringNew  F    #   0  0                     T 2  D  F  H  J $ L  N ) P   R  . T 3V X  5 Z   \  < ^   @ ` Cb  E JJ A�A=$pkg.Ring=$newType(0,$kindStruct,"ring.Ring",true,"container/ring",true,function(next_,prev_,Value_){this.$val=this;if(arguments.length===0){this.next=C.nil;this.prev=C.nil;this.Value=$ifaceNil;return;}this.next=next_;this.prev=prev_;this.Value=Value_;});�C.methods=[{prop:"init",name:"init",pkg:"container/ring",typ:$funcType([],[C],false)},{prop:"Next",name:"Next",pkg:"",typ:$funcType([],[C],false)},{prop:"Prev",name:"Prev",pkg:"",typ:$funcType([],[C],false)},{prop:"Move",name:"Move",pkg:"",typ:$funcType([$Int],[C],false)},{prop:"Link",name:"Link",pkg:"",typ:$funcType([C],[C],false)},{prop:"Unlink",name:"Unlink",pkg:"",typ:$funcType([$Int],[C],false)},{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Do",name:"Do",pkg:"",typ:$funcType([D],[],false)}];��A.init("container/ring",[{prop:"next",name:"next",embedded:false,exported:false,typ:C,tag:""},{prop:"prev",name:"prev",embedded:false,exported:false,typ:C,tag:""},{prop:"Value",name:"Value",embedded:false,exported:true,typ:$emptyInterface,tag:""}]);Ringcontainer/ring.Ccontainer/ring.Dcontainer/ring.Ring  CC=$ptrType(A);Ccontainer/ring.Ring  D(D=$funcType([$emptyInterface],[],false);D (*container/ring.Ring).init ��A.ptr.prototype.init=function(){var a;a=this;  �a.next=a;  �a.prev=a;  �return a;    };A.prototype.init=function(){return this.$val.init();};Ringinit~container/ring.Ring (*container/ring.Ring).Next ��A.ptr.prototype.Next=function(){var a;a=this;    if(a.next===C.nil){  'return a.init();    }  ;return a.next;    };A.prototype.Next=function(){return this.$val.Next();};Ringcontainer/ring.Ccontainer/ring.Ringcontainer/ring.init~ (*container/ring.Ring).Prev ��A.ptr.prototype.Prev=function(){var a;a=this;    if(a.next===C.nil){  �return a.init();    }  �return a.prev;    };A.prototype.Prev=function(){return this.$val.Prev();};Ringcontainer/ring.Ccontainer/ring.Ringcontainer/ring.init~ (*container/ring.Ring).Move �dA.ptr.prototype.Move=function(a){var a,b;b=this;    if(b.next===C.nil){  �return b.init();    }    if(a<0){  �while(true){if(!(a<0)){break;}  �b=b.prev;  �a=a+(1)>>0;    }    }else if(a>0){  while(true){if(!(a>0)){break;}  "b=b.next;  a=a-(1)>>0;    }    }  5return b;    };A.prototype.Move=function(a){return this.$val.Move(a);};Ringcontainer/ring.Ccontainer/ring.Ringcontainer/ring.init~ container/ring.Newcontainer/ringNew B�!B=function(a){var a,b,c,d;    if(a<=0){  �return C.nil;    }  �b=new A.ptr(C.nil,C.nil,$ifaceNil);  �c=b;  �d=1;while(true){if(!(d<a)){break;}  �c.next=new A.ptr(C.nil,c,$ifaceNil);  �c=c.next;  �d=d+(1)>>0;    }  �c.next=b;  b.prev=c;  return b;    };$pkg.New=B;Newcontainer/ring.Ccontainer/ring.Newcontainer/ring.Ring (*container/ring.Ring).Link ��A.ptr.prototype.Link=function(a){var a,b,c,d;b=this;  �c=b.Next();    if(!(a===C.nil)){  �d=a.Prev();  	\b.next=a;  	ia.prev=b;  	vc.prev=d;  	�d.next=c;    }  	�return c;    };A.prototype.Link=function(a){return this.$val.Link(a);};Ringcontainer/ring.Ccontainer/ring.Ring (*container/ring.Ring).Unlink ��A.ptr.prototype.Unlink=function(a){var a,b;b=this;    if(a<=0){  
�return C.nil;    }  
�return b.Link(b.Move(a+1>>0));    };A.prototype.Unlink=function(a){return this.$val.Unlink(a);};Ringcontainer/ring.Ccontainer/ring.Ring (*container/ring.Ring).Len ��A.ptr.prototype.Len=function(){var a,b,c;a=this;  Jb=0;    if(!(a===C.nil)){  bb=1;  nc=a.Next();while(true){if(!(!(c===a))){break;}  �b=b+(1)>>0;  �c=c.next;}    }  �return b;    };A.prototype.Len=function(){return this.$val.Len();};Ringcontainer/ring.Ccontainer/ring.Ring (*container/ring.Ring).Do �nA.ptr.prototype.Do=function(a){var{a,b,c,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:b=this;  Iif(!(b===C.nil)){$s=1;continue;}$s=2;continue;    case 1:  Y$r=a(b.Value);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  jc=b.Next();case 4:if(!(!(c===b))){$s=5;continue;}  �$r=a(c.Value);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �c=c.next;$s=4;continue;case 5:    case 2:    $s=-1;return;}return;}var $f={$blk:A.ptr.prototype.Do,$c:true,$r,a,b,c,$s};return $f;};A.prototype.Do=function(a){return this.$val.Do(a);};Ringcontainer/ring.Ccontainer/ring.Ring �{"Base":3238,"Files":[{"Name":"/usr/local/go/src/container/ring/ring.go","Base":1,"Size":3236,"Lines":[0,55,109,159,160,217,230,231,284,355,426,494,520,523,542,560,624,626,627,657,669,681,691,693,694,754,784,804,822,825,840,842,843,907,937,957,975,978,993,995,996,1068,1135,1138,1173,1193,1211,1214,1224,1237,1258,1272,1276,1289,1310,1324,1328,1331,1341,1343,1344,1381,1405,1418,1431,1434,1450,1458,1484,1510,1523,1526,1538,1550,1560,1562,1563,1618,1676,1700,1703,1749,1809,1868,1927,1983,2000,2003,2051,2113,2172,2210,2213,2250,2265,2280,2296,2346,2393,2406,2419,2432,2445,2448,2458,2460,2461,2526,2584,2643,2646,2683,2696,2709,2712,2742,2744,2745,2795,2858,2861,2888,2896,2911,2919,2961,2968,2972,2975,2985,2987,2988,3058,3110,3143,3158,3171,3213,3227,3231,3234],"Infos":null}]}
   گ���S� < 