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
GoLinkname�� Implementation�� 	Reference��   ��Time��   �Ys��debug/plan9objplan9objencoding/binaryerrorsfmtioos��i�� 
FileHeaderSectionsSectioncloserCloserioClosefFileSymbolsSymnameMagicBssEntryPtrSizeLoadAddressHdrSizerReaderAtSectionHeadersrSectionReaderDatasOpen
ReadSeekerNameSizeOffsetValueTypeReadAtpoffnerrbaselimitReadSeekoffsetwhenceReaderSeekerplan9objErrNoSymbolsMagic386Magic64
MagicAMD64MagicARMNewFileV     &) $+  #  +   -   6 BB C IB&T 0 . 4E    ; 4G   L    4N G  P   L	   R	   V
   \   d
   p
  T { C ��C �� C ���C �G z+BF  x�  �   BF  G  �    �  �+�  ��  z�  ��  && �+T � � ��   �   � ��   �  �   �	   �	  T �   �
   �   �  T � +  .   T �+  � �� � � � T �+ x�   �   �   �  ����T � � �� �� � �  � �� � �      � �� �� � � �  � ��    �+ �++ � � T �+  � �� � � T �+  � � �     T � � � 62|���������������C�++ $�����z�����& AA=$packages["encoding/binary"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  BB=$packages["errors"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  CC=$packages["fmt"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  DD=$packages["io"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  EE=$packages["os"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  F��F=$pkg.prog=$newType(0,$kindStruct,"plan9obj.prog",true,"debug/plan9obj",false,function(Magic_,Text_,Data_,Bss_,Syms_,Entry_,Spsz_,Pcsz_){this.$val=this;if(arguments.length===0){this.Magic=0;this.Text=0;this.Data=0;this.Bss=0;this.Syms=0;this.Entry=0;this.Spsz=0;this.Pcsz=0;return;}this.Magic=Magic_;this.Text=Text_;this.Data=Data_;this.Bss=Bss_;this.Syms=Syms_;this.Entry=Entry_;this.Spsz=Spsz_;this.Pcsz=Pcsz_;});�_F.init("",[{prop:"Magic",name:"Magic",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Text",name:"Text",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Data",name:"Data",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Bss",name:"Bss",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Syms",name:"Syms",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Entry",name:"Entry",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Spsz",name:"Spsz",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Pcsz",name:"Pcsz",embedded:false,exported:true,typ:$Uint32,tag:""}]);progdebug/plan9obj.prog  G�G=$pkg.sym=$newType(0,$kindStruct,"plan9obj.sym",true,"debug/plan9obj",false,function(value_,typ_,name_){this.$val=this;if(arguments.length===0){this.value=new $Uint64(0,0);this.typ=0;this.name=S.nil;return;}this.value=value_;this.typ=typ_;this.name=name_;});��G.init("debug/plan9obj",[{prop:"value",name:"value",embedded:false,exported:false,typ:$Uint64,tag:""},{prop:"typ",name:"typ",embedded:false,exported:false,typ:$Uint8,tag:""},{prop:"name",name:"name",embedded:false,exported:false,typ:S,tag:""}]);symdebug/plan9obj.Sdebug/plan9obj.sym  H��H=$pkg.FileHeader=$newType(0,$kindStruct,"plan9obj.FileHeader",true,"debug/plan9obj",true,function(Magic_,Bss_,Entry_,PtrSize_,LoadAddress_,HdrSize_){this.$val=this;if(arguments.length===0){this.Magic=0;this.Bss=0;this.Entry=new $Uint64(0,0);this.PtrSize=0;this.LoadAddress=new $Uint64(0,0);this.HdrSize=new $Uint64(0,0);return;}this.Magic=Magic_;this.Bss=Bss_;this.Entry=Entry_;this.PtrSize=PtrSize_;this.LoadAddress=LoadAddress_;this.HdrSize=HdrSize_;});��H.init("",[{prop:"Magic",name:"Magic",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Bss",name:"Bss",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Entry",name:"Entry",embedded:false,exported:true,typ:$Uint64,tag:""},{prop:"PtrSize",name:"PtrSize",embedded:false,exported:true,typ:$Int,tag:""},{prop:"LoadAddress",name:"LoadAddress",embedded:false,exported:true,typ:$Uint64,tag:""},{prop:"HdrSize",name:"HdrSize",embedded:false,exported:true,typ:$Uint64,tag:""}]);
FileHeaderdebug/plan9obj.FileHeader  I�oI=$pkg.File=$newType(0,$kindStruct,"plan9obj.File",true,"debug/plan9obj",true,function(FileHeader_,Sections_,closer_){this.$val=this;if(arguments.length===0){this.FileHeader=new H.ptr(0,0,new $Uint64(0,0),0,new $Uint64(0,0),new $Uint64(0,0));this.Sections=X.nil;this.closer=$ifaceNil;return;}this.FileHeader=FileHeader_;this.Sections=Sections_;this.closer=closer_;});��U.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Symbols",name:"Symbols",pkg:"",typ:$funcType([],[AC,$error],false)},{prop:"Section",name:"Section",pkg:"",typ:$funcType([$String],[W],false)}];�I.init("debug/plan9obj",[{prop:"FileHeader",name:"FileHeader",embedded:true,exported:true,typ:H,tag:""},{prop:"Sections",name:"Sections",embedded:false,exported:true,typ:X,tag:""},{prop:"closer",name:"closer",embedded:false,exported:false,typ:D.Closer,tag:""}]);Filedebug/plan9obj.ACdebug/plan9obj.Filedebug/plan9obj.FileHeaderdebug/plan9obj.Udebug/plan9obj.Wdebug/plan9obj.X	io.Closer  J�J=$pkg.SectionHeader=$newType(0,$kindStruct,"plan9obj.SectionHeader",true,"debug/plan9obj",true,function(Name_,Size_,Offset_){this.$val=this;if(arguments.length===0){this.Name="";this.Size=0;this.Offset=0;return;}this.Name=Name_;this.Size=Size_;this.Offset=Offset_;});��J.init("",[{prop:"Name",name:"Name",embedded:false,exported:true,typ:$String,tag:""},{prop:"Size",name:"Size",embedded:false,exported:true,typ:$Uint32,tag:""},{prop:"Offset",name:"Offset",embedded:false,exported:true,typ:$Uint32,tag:""}]);SectionHeaderdebug/plan9obj.SectionHeader  K�@K=$pkg.Section=$newType(0,$kindStruct,"plan9obj.Section",true,"debug/plan9obj",true,function(SectionHeader_,ReaderAt_,sr_){this.$val=this;if(arguments.length===0){this.SectionHeader=new J.ptr("",0,0);this.ReaderAt=$ifaceNil;this.sr=AB.nil;return;}this.SectionHeader=SectionHeader_;this.ReaderAt=ReaderAt_;this.sr=sr_;});��W.methods=[{prop:"Data",name:"Data",pkg:"",typ:$funcType([],[S,$error],false)},{prop:"Open",name:"Open",pkg:"",typ:$funcType([],[D.ReadSeeker],false)}];�K.init("debug/plan9obj",[{prop:"SectionHeader",name:"SectionHeader",embedded:true,exported:true,typ:J,tag:""},{prop:"ReaderAt",name:"ReaderAt",embedded:true,exported:true,typ:D.ReaderAt,tag:""},{prop:"sr",name:"sr",embedded:false,exported:false,typ:AB,tag:""}]);Sectiondebug/plan9obj.ABdebug/plan9obj.Sdebug/plan9obj.Sectiondebug/plan9obj.SectionHeaderdebug/plan9obj.Wio.ReadSeekerio.ReaderAt  L�L=$pkg.Sym=$newType(0,$kindStruct,"plan9obj.Sym",true,"debug/plan9obj",true,function(Value_,Type_,Name_){this.$val=this;if(arguments.length===0){this.Value=new $Uint64(0,0);this.Type=0;this.Name="";return;}this.Value=Value_;this.Type=Type_;this.Name=Name_;});��L.init("",[{prop:"Value",name:"Value",embedded:false,exported:true,typ:$Uint64,tag:""},{prop:"Type",name:"Type",embedded:false,exported:true,typ:$Int32,tag:""},{prop:"Name",name:"Name",embedded:false,exported:true,typ:$String,tag:""}]);Symdebug/plan9obj.Sym  M��M=$pkg.formatError=$newType(0,$kindStruct,"plan9obj.formatError",true,"debug/plan9obj",false,function(off_,msg_,val_){this.$val=this;if(arguments.length===0){this.off=0;this.msg="";this.val=$ifaceNil;return;}this.off=off_;this.msg=msg_;this.val=val_;});RAD.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];��M.init("debug/plan9obj",[{prop:"off",name:"off",embedded:false,exported:false,typ:$Int,tag:""},{prop:"msg",name:"msg",embedded:false,exported:false,typ:$String,tag:""},{prop:"val",name:"val",embedded:false,exported:false,typ:$emptyInterface,tag:""}]);formatErrordebug/plan9obj.ADdebug/plan9obj.formatError  SS=$sliceType($Uint8);S  TT=$sliceType($emptyInterface);T  UU=$ptrType(I);Udebug/plan9obj.File  VV=$arrayType($Uint8,4);V  WW=$ptrType(K);Wdebug/plan9obj.Section  XX=$sliceType(W);Xdebug/plan9obj.W  YY=$ptrType($Uint64);Y  Z��Z=$structType("debug/plan9obj",[{prop:"name",name:"name",embedded:false,exported:false,typ:$String,tag:""},{prop:"size",name:"size",embedded:false,exported:false,typ:$Uint32,tag:""}]);Z  AAAA=$sliceType(Z);AAdebug/plan9obj.Z  ABAB=$ptrType(D.SectionReader);ABio.SectionReader  ACAC=$sliceType(L);ACdebug/plan9obj.Sym  ADAD=$ptrType(M);ADdebug/plan9obj.formatError  ErrNoSymbols  2  �$pkg.ErrNoSymbols=B.New("no symbol section");debug/plan9obj.ErrNoSymbols
errors.New (*debug/plan9obj.Section).Data �K.ptr.prototype.Data=function(){var{a,b,c,d,e,f,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  Hb=$makeSlice(S,$flatten64(a.sr.Size()));  jd=a.sr.ReadAt(b,new $Int64(0,0));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];    if(e===b.$length){  �f=$ifaceNil;    }  �$s=-1;return[$subslice(b,0,e),f];    }return;}var $f={$blk:K.ptr.prototype.Data,$c:true,$r,a,b,c,d,e,f,$s};return $f;};K.prototype.Data=function(){return this.$val.Data();};Sectiondebug/plan9obj.Sdebug/plan9obj.Section (*debug/plan9obj.Section).Open ��K.ptr.prototype.Open=function(){var a;a=this;  0return D.NewSectionReader(a.sr,new $Int64(0,0),new $Int64(2147483647,4294967295));    };K.prototype.Open=function(){return this.$val.Open();};Sectiondebug/plan9obj.Sectionio.NewSectionReader #(*debug/plan9obj.formatError).Error ��M.ptr.prototype.Error=function(){var{a,b,c,d,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  �b=a.msg;  �if(!($interfaceIsEqual(a.val,$ifaceNil))){$s=1;continue;}$s=2;continue;    case 1:  �c=C.Sprintf(" '%v'",new T([a.val]));$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=b+(c);    case 2:  "d=C.Sprintf(" in record at byte %#x",new T([new $Int(a.off)]));$s=4;case 4:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}b=b+(d);  W$s=-1;return b;    }return;}var $f={$blk:M.ptr.prototype.Error,$c:true,$r,a,b,c,d,$s};return $f;};M.prototype.Error=function(){return this.$val.Error();};formatErrordebug/plan9obj.Tdebug/plan9obj.formatErrorfmt.Sprintf debug/plan9obj.Opendebug/plan9objOpen N��N=function(a){var{a,b,c,d,e,f,g,h,i,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  �c=E.Open(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  	$s=-1;return[U.nil,e];    }  	*g=P(d);$s=2;case 2:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[0];e=f[1];  	Aif(!($interfaceIsEqual(e,$ifaceNil))){$s=3;continue;}$s=4;continue;    case 3:  	Si=d.Close();$s=5;case 5:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}i;  	_$s=-1;return[U.nil,e];    case 4:  	sh.closer=d;  	�$s=-1;return[h,$ifaceNil];    }return;}var $f={$blk:N,$c:true,$r,a,b,c,d,e,f,g,h,i,$s};return $f;};$pkg.Open=N;Opendebug/plan9obj.Filedebug/plan9obj.NewFiledebug/plan9obj.Opendebug/plan9obj.Uos.Open (*debug/plan9obj.File).Close �I.ptr.prototype.Close=function(){var{a,b,c,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  
-b=$ifaceNil;  
8if(!($interfaceIsEqual(a.closer,$ifaceNil))){$s=1;continue;}$s=2;continue;    case 1:  
Oc=a.closer.Close();$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;  
ha.closer=$ifaceNil;    case 2:  
{$s=-1;return b;    }return;}var $f={$blk:I.ptr.prototype.Close,$c:true,$r,a,b,c,$s};return $f;};I.prototype.Close=function(){return this.$val.Close();};Filedebug/plan9obj.File debug/plan9obj.parseMagicdebug/plan9obj
parseMagic O��O=function(a){var a,b,c;  
�b=$clone(A.BigEndian,A.bigEndian).Uint32(a);    c=b;    if((c===(491))||(c===(35479))||(c===(1607))){  return[b,$ifaceNil];    }  $return[0,new M.ptr(0,"bad magic number",a)];    };
parseMagicdebug/plan9obj.formatErrordebug/plan9obj.parseMagicencoding/binary.BigEndianencoding/binary.bigEndian debug/plan9obj.NewFiledebug/plan9objNewFile P�	�P=function(a){var{a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  (b=D.NewSectionReader(a,new $Int64(0,0),new $Int64(2147483647,4294967295));  wc=V.zero();  �e=a.ReadAt(new S(c),new $Int64(0,0));$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  �$s=-1;return[U.nil,f];    }  �g=O(new S(c));h=g[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  �$s=-1;return[U.nil,h];    }  i=new F.ptr(0,0,0,0,0,0,0,0);  (k=A.Read(b,(j=A.BigEndian,new j.constructor.elem(j)),i);$s=2;case 2:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=k;    if(!($interfaceIsEqual(l,$ifaceNil))){  e$s=-1;return[U.nil,l];    }  zm=new I.ptr(new H.ptr(i.Magic,i.Bss,(new $Uint64(0,i.Entry)),4,new $Uint64(0,4096),new $Uint64(0,32)),X.nil,$ifaceNil);  3if(!((((i.Magic&32768)>>>0)===0))){$s=3;continue;}$s=4;continue;    case 3:  So=A.Read(b,(n=A.BigEndian,new n.constructor.elem(n)),(m.$ptr_Entry||(m.$ptr_Entry=new Y(function(){return this.$target.FileHeader.Entry;},function($v){this.$target.FileHeader.Entry=$v;},m))));$s=5;case 5:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}p=o;    if(!($interfaceIsEqual(p,$ifaceNil))){  �$s=-1;return[U.nil,p];    }  �m.FileHeader.PtrSize=8;  �m.FileHeader.LoadAddress=new $Uint64(0,2097152);  �m.FileHeader.HdrSize=(q=m.FileHeader.HdrSize,r=new $Uint64(0,8),new $Uint64(q.$high+r.$high,q.$low+r.$low));    case 4:  �s=new AA([new Z.ptr("text",i.Text),new Z.ptr("data",i.Data),new Z.ptr("syms",i.Syms),new Z.ptr("spsz",i.Spsz),new Z.ptr("pcsz",i.Pcsz)]);  �m.Sections=$makeSlice(X,5);  �t=((m.FileHeader.HdrSize.$low>>>0));  �u=s;v=0;while(true){if(!(v<u.$length)){break;}w=v;x=$clone(((v<0||v>=u.$length)?($throwRuntimeError("index out of range"),undefined):u.$array[u.$offset+v]),Z);  �y=new K.ptr(new J.ptr("",0,0),$ifaceNil,AB.nil);  J.copy(y.SectionHeader,new J.ptr(x.name,x.size,t));  et=t+(x.size)>>>0;  xy.sr=D.NewSectionReader(a,(new $Int64(0,y.SectionHeader.Offset)),(new $Int64(0,y.SectionHeader.Size)));  �y.ReaderAt=y.sr;  �(z=m.Sections,((w<0||w>=z.$length)?($throwRuntimeError("index out of range"),undefined):z.$array[z.$offset+w]=y));    v++;}  �$s=-1;return[m,$ifaceNil];    }return;}var $f={$blk:P,$c:true,$r,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s};return $f;};$pkg.NewFile=P;NewFiledebug/plan9obj.AAdebug/plan9obj.ABdebug/plan9obj.Filedebug/plan9obj.FileHeaderdebug/plan9obj.NewFiledebug/plan9obj.Sdebug/plan9obj.Sectiondebug/plan9obj.SectionHeaderdebug/plan9obj.Udebug/plan9obj.Vdebug/plan9obj.Wdebug/plan9obj.Xdebug/plan9obj.Ydebug/plan9obj.Zdebug/plan9obj.parseMagicdebug/plan9obj.progencoding/binary.BigEndianencoding/binary.Readio.NewSectionReaderio.SectionReader debug/plan9obj.walksymtabdebug/plan9obj
walksymtab Q��Q=function(a,b,c){var{a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$r,$c}=$restore(this,{a,b,c});$s=$s||0;s:while(true){switch($s){case 0:  =e=(d=A.BigEndian,new d.constructor.elem(d));  lf=new G.ptr(new $Uint64(0,0),0,S.nil);  sg=a;  ~case 1:if(!(g.$length>=4)){$s=2;continue;}    if(g.$length<b){  �$s=-1;return new M.ptr(a.$length,"unexpected EOF",$ifaceNil);    }  if(b===8){$s=3;continue;}$s=4;continue;    case 3:  (h=e.Uint64($subslice(g,0,8));$s=6;case 6:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}f.value=h;  Jg=$subslice(g,8);    $s=5;continue;case 4:  bi=e.Uint32($subslice(g,0,4));$s=7;case 7:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}f.value=(new $Uint64(0,i));  �g=$subslice(g,4);    case 5:  �j=0;  �j=((0>=g.$length?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+0])&127)>>>0;  �f.typ=j;  �g=$subslice(g,1);  �k=0;  �l=0;  k=0;while(true){if(!(k<g.$length)){break;}    if(((k<0||k>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+k])===0){  4l=1;  Abreak;    }  k=k+(1)>>0;    }    m=j;    if((m===(122))||(m===(90))){  sg=$subslice(g,(k+l>>0));  �k=0;while(true){if(!((k+2>>0)<=g.$length)){break;}    if((((k<0||k>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+k])===0)&&((n=k+1>>0,((n<0||n>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+n]))===0)){  �l=2;  �break;    }  �k=k+(2)>>0;    }    }    if(g.$length<(k+l>>0)){  $s=-1;return new M.ptr(a.$length,"unexpected EOF",$ifaceNil);    }  Hf.name=$subslice(g,0,k);  Zk=k+(l)>>0;  fg=$subslice(g,k);  so=c($clone(f,G));$s=8;case 8:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}o;    $s=1;continue;case 2:  }$s=-1;return $ifaceNil;    }return;}var $f={$blk:Q,$c:true,$r,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s};return $f;};
walksymtabdebug/plan9obj.Sdebug/plan9obj.formatErrordebug/plan9obj.symdebug/plan9obj.walksymtabencoding/binary.BigEndian debug/plan9obj.newTabledebug/plan9objnewTable R��R=function(a,b){var{a,b,c,d,e,f,g,h,$s,$r,$c}=$restore(this,{a,b});$s=$s||0;s:while(true){switch($s){case 0:c=[c];d=[d];e=[e];  $d[0]=0;  +f=Q(a,b,(function(c,d,e){return function(f){var f;  bd[0]=d[0]+(1)>>0;  hreturn $ifaceNil;    };})(c,d,e));$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;    if(!($interfaceIsEqual(g,$ifaceNil))){  �$s=-1;return[AC.nil,g];    }  �c[0]=new $global.Map();  �e[0]=$makeSlice(AC,0,d[0]);  �h=Q(a,b,(function(c,d,e){return function(h){var h,i,j,k,l,m,n,o,p,q,r,s,t;  i=e[0].$length;  #e[0]=$subslice(e[0],0,(i+1>>0));  :j=((i<0||i>=e[0].$length)?($throwRuntimeError("index out of range"),undefined):e[0].$array[e[0].$offset+i]);  Kj.Type=((h.typ>>0));  cj.Value=h.value;    k=h.typ;    if((k===(122))||(k===(90))){  �l=0;while(true){if(!(l<h.name.$length)){break;}  �m=$clone(A.BigEndian,A.bigEndian).Uint16($subslice(h.name,l,(l+2>>0)));  #n=(o=$mapIndex(c[0],$Uint16.keyFor(m)),o!==undefined?[o.v,true]:["",false]);p=n[0];q=n[1];    if(!q){  Nreturn new M.ptr(-1,"bad filename code",new $Uint16(m));    }  �r=j.Name.length;    if(r>0&&!((j.Name.charCodeAt((r-1>>0))===47))){  �j.Name=j.Name+("/");    }  �j.Name=j.Name+(p);  �l=l+(2)>>0;    }    }else{  �j.Name=($bytesToString(h.name));    }    s=h.typ;    if(s===(102)){  t=((h.value.$low<<16>>>16));(c[0]||$throwRuntimeError("assignment to entry in nil map")).set($Uint16.keyFor(t),{k:t,v:j.Name});    }  ?return $ifaceNil;    };})(c,d,e));$s=2;case 2:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;    if(!($interfaceIsEqual(g,$ifaceNil))){  a$s=-1;return[AC.nil,g];    }  v$s=-1;return[e[0],$ifaceNil];    }return;}var $f={$blk:R,$c:true,$r,a,b,c,d,e,f,g,h,$s};return $f;};newTabledebug/plan9obj.ACdebug/plan9obj.Symdebug/plan9obj.formatErrordebug/plan9obj.newTabledebug/plan9obj.walksymtabencoding/binary.BigEndianencoding/binary.bigEndian (*debug/plan9obj.File).Symbols ��I.ptr.prototype.Symbols=function(){var{a,b,c,d,e,f,g,h,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  lb=a.Section("syms");    if(b===W.nil){  �$s=-1;return[AC.nil,$pkg.ErrNoSymbols];    }  �d=b.Data();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  $s=-1;return[AC.nil,B.New("cannot load symbol section")];    }  ;g=R(e,a.FileHeader.PtrSize);$s=2;case 2:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}h=g;$s=3;case 3:return h;    }return;}var $f={$blk:I.ptr.prototype.Symbols,$c:true,$r,a,b,c,d,e,f,g,h,$s};return $f;};I.prototype.Symbols=function(){return this.$val.Symbols();};Filedebug/plan9obj.ACdebug/plan9obj.ErrNoSymbolsdebug/plan9obj.Filedebug/plan9obj.Wdebug/plan9obj.newTable
errors.New (*debug/plan9obj.File).Section �oI.ptr.prototype.Section=function(a){var a,b,c,d,e;b=this;  �c=b.Sections;d=0;while(true){if(!(d<c.$length)){break;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);    if(e.SectionHeader.Name===a){   return e;    }    d++;}  1return W.nil;    };I.prototype.Section=function(a){return this.$val.Section(a);};Filedebug/plan9obj.Filedebug/plan9obj.W ��{"Base":7839,"Files":[{"Name":"/usr/local/go/src/debug/plan9obj/file.go","Base":1,"Size":6973,"Lines":[0,55,109,159,160,228,245,246,255,274,284,291,297,303,305,306,361,386,406,426,446,463,483,503,505,506,554,573,585,606,626,628,629,697,759,787,815,830,845,860,862,863,928,950,965,966,1004,1044,1079,1127,1177,1201,1214,1236,1238,1239,1307,1350,1384,1415,1435,1447,1450,1472,1474,1475,1542,1630,1631,1703,1721,1735,1747,1761,1763,1764,1767,1790,1794,1795,1858,1909,1935,1944,1956,1965,1967,1968,2007,2021,2040,2077,2080,2133,2145,2147,2148,2241,2281,2306,2323,2341,2344,2367,2384,2396,2414,2417,2432,2448,2450,2451,2477,2544,2568,2599,2614,2636,2661,2678,2681,2693,2695,2696,2744,2781,2793,2831,2847,2850,2904,2906,2907,2992,3065,3110,3152,3185,3204,3254,3272,3275,3307,3324,3342,3345,3346,3363,3426,3444,3447,3448,3484,3509,3532,3565,3583,3606,3628,3632,3633,3661,3731,3750,3754,3770,3797,3814,3817,3818,3842,3856,3870,3874,3895,3916,3937,3958,3979,3982,3983,4017,4018,4044,4045,4075,4095,4130,4152,4174,4190,4194,4213,4277,4297,4317,4320,4321,4336,4338,4339,4407,4454,4465,4476,4495,4520,4542,4599,4603,4626,4644,4678,4691,4702,4744,4757,4761,4762,4777,4797,4811,4823,4824,4835,4847,4862,4893,4911,4924,4934,4939,4943,4958,4975,4993,5031,5065,5079,5090,5096,5101,5105,5128,5185,5189,5207,5219,5231,5232,5240,5243,5255,5257,5258,5307,5349,5406,5417,5471,5477,5490,5494,5511,5529,5532,5533,5567,5594,5647,5664,5687,5704,5728,5749,5766,5777,5805,5822,5863,5918,5947,5960,6018,6024,6081,6101,6107,6126,6131,6135,6152,6164,6200,6204,6217,6221,6238,6256,6259,6260,6278,6280,6281,6353,6369,6420,6421,6464,6506,6542,6569,6596,6599,6600,6637,6654,6709,6712,6713,6749,6751,6752,6820,6839,6886,6918,6940,6952,6956,6959,6971],"Infos":null},{"Name":"/usr/local/go/src/debug/plan9obj/plan9obj.go","Base":6975,"Size":863,"Lines":[0,55,109,159,160,163,209,213,214,231,232,258,277,310,351,396,443,484,516,563,612,614,615,647,665,679,691,705,707,708,716,760,761,791,831,861],"Infos":null}]}
   گ��O8 < 