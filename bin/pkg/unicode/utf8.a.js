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
GoLinkname�� Implementation�� 	Reference��   ��Time��   �Z���unicode/utf8utf8�i��pr sizesnbutf8
AppendRuneDecodeLastRuneDecodeLastRuneInString
DecodeRuneDecodeRuneInString
EncodeRuneFullRuneFullRuneInStringMaxRune	RuneCountRuneCountInString	RuneErrorRuneLenRuneSelf	RuneStartUTFMaxValid	ValidRuneValidStringF      " F   2   F  
   F   P   F  
   F   n   F   ~   F  
   C ���F   �  F  
  C ���F    C ��F     C F   �   F     F  
     /"F2Q@dPo`xk�v�������������������� B��B=$pkg.acceptRange=$newType(0,$kindStruct,"utf8.acceptRange",true,"unicode/utf8",false,function(lo_,hi_){this.$val=this;if(arguments.length===0){this.lo=0;this.hi=0;return;}this.lo=lo_;this.hi=hi_;});��B.init("unicode/utf8",[{prop:"lo",name:"lo",embedded:false,exported:false,typ:$Uint8,tag:""},{prop:"hi",name:"hi",embedded:false,exported:false,typ:$Uint8,tag:""}]);acceptRangeunicode/utf8.acceptRange  Afirst  CacceptRanges  ��  �A=$toNativeArray($kindUint8,[240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,240,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,241,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,19,3,3,3,3,3,3,3,3,3,3,3,3,35,3,3,52,4,4,4,68,241,241,241,241,241,241,241,241,241,241,241]);firstunicode/utf8.first  �)  �C=$toNativeArray($kindStruct,[new B.ptr(128,191),new B.ptr(160,191),new B.ptr(128,159),new B.ptr(144,191),new B.ptr(128,143),new B.ptr(0,0),new B.ptr(0,0),new B.ptr(0,0),new B.ptr(0,0),new B.ptr(0,0),new B.ptr(0,0),new B.ptr(0,0),new B.ptr(0,0),new B.ptr(0,0),new B.ptr(0,0),new B.ptr(0,0)]);acceptRangesunicode/utf8.acceptRangeunicode/utf8.acceptRanges unicode/utf8.FullRuneunicode/utf8FullRune D��D=function(a){var a,b,c,d,e,f;  �b=a.$length;    if(b===0){  �return false;    }  d=(c=(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]),((c<0||c>=A.length)?($throwRuntimeError("index out of range"),undefined):A[c]));    if(b>=((((d&7)>>>0)>>0))){  6return true;    }  �f=$clone((e=d>>>4<<24>>>24,((e<0||e>=C.length)?($throwRuntimeError("index out of range"),undefined):C[e])),B);    if(b>1&&((1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1])<f.lo||f.hi<(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]))){  �return true;    }else if(b>2&&((2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2])<128||191<(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]))){  return true;    }  &return false;    };$pkg.FullRune=D;FullRuneunicode/utf8.FullRuneunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.FullRuneInStringunicode/utf8FullRuneInString E�;E=function(a){var a,b,c,d,e,f;  �b=a.length;    if(b===0){  �return false;    }  �d=(c=a.charCodeAt(0),((c<0||c>=A.length)?($throwRuntimeError("index out of range"),undefined):A[c]));    if(b>=((((d&7)>>>0)>>0))){  �return true;    }  <f=$clone((e=d>>>4<<24>>>24,((e<0||e>=C.length)?($throwRuntimeError("index out of range"),undefined):C[e])),B);    if(b>1&&(a.charCodeAt(1)<f.lo||f.hi<a.charCodeAt(1))){  �return true;    }else if(b>2&&(a.charCodeAt(2)<128||191<a.charCodeAt(2))){  �return true;    }  �return false;    };$pkg.FullRuneInString=E;FullRuneInStringunicode/utf8.FullRuneInStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.DecodeRuneunicode/utf8
DecodeRune F�jF=function(a){var a,aa,ab,ac,ad,ae,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;b=0;c=0;  �d=a.$length;    if(d<1){    e=65533;f=0;b=e;c=f;return[b,c];    }  %g=(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]);  1h=((g<0||g>=A.length)?($throwRuntimeError("index out of range"),undefined):A[g]);    if(h>=240){  i=(((h>>0))<<31>>0)>>31>>0;    j=(((((0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0])>>0))&~i)>>0)|(65533&i);k=1;b=j;c=k;return[b,c];    }  ul=((((h&7)>>>0)>>0));  �n=$clone((m=h>>>4<<24>>>24,((m<0||m>=C.length)?($throwRuntimeError("index out of range"),undefined):C[m])),B);    if(d<l){    o=65533;p=1;b=o;c=p;return[b,c];    }  �q=(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]);    if(q<n.lo||n.hi<q){    r=65533;s=1;b=r;c=s;return[b,c];    }    if(l<=2){    t=(((((g&31)>>>0)>>0))<<6>>0)|((((q&63)>>>0)>>0));u=2;b=t;c=u;return[b,c];    }  �v=(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]);    if(v<128||191<v){    w=65533;x=1;b=w;c=x;return[b,c];    }    if(l<=3){    y=((((((g&15)>>>0)>>0))<<12>>0)|(((((q&63)>>>0)>>0))<<6>>0))|((((v&63)>>>0)>>0));z=3;b=y;c=z;return[b,c];    }  4aa=(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]);    if(aa<128||191<aa){    ab=65533;ac=1;b=ab;c=ac;return[b,c];    }    ad=(((((((g&7)>>>0)>>0))<<18>>0)|(((((q&63)>>>0)>>0))<<12>>0))|(((((v&63)>>>0)>>0))<<6>>0))|((((aa&63)>>>0)>>0));ae=4;b=ad;c=ae;return[b,c];    };$pkg.DecodeRune=F;
DecodeRuneunicode/utf8.DecodeRuneunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.DecodeRuneInStringunicode/utf8DecodeRuneInString G��G=function(a){var a,aa,ab,ac,ad,ae,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;b=0;c=0;  �d=a.length;    if(d<1){    e=65533;f=0;b=e;c=f;return[b,c];    }  �g=a.charCodeAt(0);  �h=((g<0||g>=A.length)?($throwRuntimeError("index out of range"),undefined):A[g]);    if(h>=240){  �i=(((h>>0))<<31>>0)>>31>>0;    j=((((a.charCodeAt(0)>>0))&~i)>>0)|(65533&i);k=1;b=j;c=k;return[b,c];    }  >l=((((h&7)>>>0)>>0));  Pn=$clone((m=h>>>4<<24>>>24,((m<0||m>=C.length)?($throwRuntimeError("index out of range"),undefined):C[m])),B);    if(d<l){    o=65533;p=1;b=o;c=p;return[b,c];    }  �q=a.charCodeAt(1);    if(q<n.lo||n.hi<q){    r=65533;s=1;b=r;c=s;return[b,c];    }    if(l<=2){    t=(((((g&31)>>>0)>>0))<<6>>0)|((((q&63)>>>0)>>0));u=2;b=t;c=u;return[b,c];    }  fv=a.charCodeAt(2);    if(v<128||191<v){    w=65533;x=1;b=w;c=x;return[b,c];    }    if(l<=3){    y=((((((g&15)>>>0)>>0))<<12>>0)|(((((q&63)>>>0)>>0))<<6>>0))|((((v&63)>>>0)>>0));z=3;b=y;c=z;return[b,c];    }  �aa=a.charCodeAt(3);    if(aa<128||191<aa){    ab=65533;ac=1;b=ab;c=ac;return[b,c];    }    ad=(((((((g&7)>>>0)>>0))<<18>>0)|(((((q&63)>>>0)>>0))<<12>>0))|(((((v&63)>>>0)>>0))<<6>>0))|((((aa&63)>>>0)>>0));ae=4;b=ad;c=ae;return[b,c];    };$pkg.DecodeRuneInString=G;DecodeRuneInStringunicode/utf8.DecodeRuneInStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.DecodeLastRuneunicode/utf8DecodeLastRune H��H=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;c=0;   �d=a.$length;    if(d===0){    e=65533;f=0;b=e;c=f;return[b,c];    }   �g=d-1>>0;   �b=((((g<0||g>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+g])>>0));    if(b<128){    h=b;i=1;b=h;c=i;return[b,c];    }  !�j=d-4>>0;    if(j<0){  !�j=0;    }  !�g=g-(1)>>0;    while(true){if(!(g>=j)){break;}    if(P(((g<0||g>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+g]))){  "break;    }  !�g=g-(1)>>0;    }    if(g<0){  ".g=0;    }  "<k=F($subslice(a,g,d));b=k[0];c=k[1];    if(!(((g+c>>0)===d))){    l=65533;m=1;b=l;c=m;return[b,c];    }    n=b;o=c;b=n;c=o;return[b,c];    };$pkg.DecodeLastRune=H;DecodeLastRuneunicode/utf8.DecodeLastRuneunicode/utf8.DecodeRuneunicode/utf8.RuneStart #unicode/utf8.DecodeLastRuneInStringunicode/utf8DecodeLastRuneInString I�WI=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;c=0;  $�d=a.length;    if(d===0){    e=65533;f=0;b=e;c=f;return[b,c];    }  $�g=d-1>>0;  $�b=((a.charCodeAt(g)>>0));    if(b<128){    h=b;i=1;b=h;c=i;return[b,c];    }  %�j=d-4>>0;    if(j<0){  %�j=0;    }  %�g=g-(1)>>0;    while(true){if(!(g>=j)){break;}    if(P(a.charCodeAt(g))){  &	break;    }  %�g=g-(1)>>0;    }    if(g<0){  &(g=0;    }  &6k=G($substring(a,g,d));b=k[0];c=k[1];    if(!(((g+c>>0)===d))){    l=65533;m=1;b=l;c=m;return[b,c];    }    n=b;o=c;b=n;c=o;return[b,c];    };$pkg.DecodeLastRuneInString=I;DecodeLastRuneInString#unicode/utf8.DecodeLastRuneInStringunicode/utf8.DecodeRuneInStringunicode/utf8.RuneStart unicode/utf8.RuneLenunicode/utf8RuneLen J� J=function(a){var a;    if(a<0){  'creturn-1;    }else if(a<=127){  '�return 1;    }else if(a<=2047){  '�return 2;    }else if(55296<=a&&a<=57343){  '�return-1;    }else if(a<=65535){  '�return 3;    }else if(a<=1114111){  (return 4;    }  (*return-1;    };$pkg.RuneLen=J;RuneLenunicode/utf8.RuneLen unicode/utf8.EncodeRuneunicode/utf8
EncodeRune K�	zK=function(a,b){var a,b,c;  )}c=((b>>>0));    if(c<=127){  )�(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=((b<<24>>>24)));  )�return 1;    }else if(c<=2047){  )�$unused((1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]));  )�(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=((192|(((b>>6>>0)<<24>>>24)))>>>0));  *(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=((128|((((b<<24>>>24))&63)>>>0))>>>0));  *2return 2;    }else if((c>1114111)||(55296<=c&&c<=57343)){  *xb=65533;  *�$unused((2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]));  *�(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=((224|(((b>>12>>0)<<24>>>24)))>>>0));  *�(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=((128|(((((b>>6>>0)<<24>>>24))&63)>>>0))>>>0));  +
(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=((128|((((b<<24>>>24))&63)>>>0))>>>0));  +&return 3;    }else if(c<=65535){  *�$unused((2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]));  *�(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=((224|(((b>>12>>0)<<24>>>24)))>>>0));  *�(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=((128|(((((b>>6>>0)<<24>>>24))&63)>>>0))>>>0));  +
(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=((128|((((b<<24>>>24))&63)>>>0))>>>0));  +&return 3;    }else{  +;$unused((3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]));  +a(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=((240|(((b>>18>>0)<<24>>>24)))>>>0));  +{(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=((128|(((((b>>12>>0)<<24>>>24))&63)>>>0))>>>0));  +�(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=((128|(((((b>>6>>0)<<24>>>24))&63)>>>0))>>>0));  +�(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]=((128|((((b<<24>>>24))&63)>>>0))>>>0));  +�return 4;    }    };$pkg.EncodeRune=K;
EncodeRuneunicode/utf8.EncodeRune unicode/utf8.AppendRuneunicode/utf8
AppendRune L��L=function(a,b){var a,b;    if(((b>>>0))<=127){  -return $append(a,((b<<24>>>24)));    }  -0return M(a,b);    };$pkg.AppendRune=L;
AppendRuneunicode/utf8.AppendRuneunicode/utf8.appendRuneNonASCII unicode/utf8.appendRuneNonASCIIunicode/utf8appendRuneNonASCII M��M=function(a,b){var a,b,c;  -�c=((b>>>0));    if(c<=2047){  .return $append(a,(192|(((b>>6>>0)<<24>>>24)))>>>0,(128|((((b<<24>>>24))&63)>>>0))>>>0);    }else if((c>1114111)||(55296<=c&&c<=57343)){  .sb=65533;  .�return $append(a,(224|(((b>>12>>0)<<24>>>24)))>>>0,(128|(((((b>>6>>0)<<24>>>24))&63)>>>0))>>>0,(128|((((b<<24>>>24))&63)>>>0))>>>0);    }else if(c<=65535){  .�return $append(a,(224|(((b>>12>>0)<<24>>>24)))>>>0,(128|(((((b>>6>>0)<<24>>>24))&63)>>>0))>>>0,(128|((((b<<24>>>24))&63)>>>0))>>>0);    }else{  .�return $append(a,(240|(((b>>18>>0)<<24>>>24)))>>>0,(128|(((((b>>12>>0)<<24>>>24))&63)>>>0))>>>0,(128|(((((b>>6>>0)<<24>>>24))&63)>>>0))>>>0,(128|((((b<<24>>>24))&63)>>>0))>>>0);    }    };appendRuneNonASCIIunicode/utf8.appendRuneNonASCII unicode/utf8.RuneCountunicode/utf8	RuneCount N��N=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;  /�b=a.$length;  0c=0;  0d=0;while(true){if(!(d<b)){break;}  0,c=c+(1)>>0;  02e=((d<0||d>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+d]);    if(e<128){  0id=d+(1)>>0;  0pcontinue;    }  0f=((e<0||e>=A.length)?($throwRuntimeError("index out of range"),undefined):A[e]);    if(f===241){  0�d=d+(1)>>0;  0�continue;    }  0�g=((((f&7)>>>0)>>0));    if((d+g>>0)>b){  0�d=d+(1)>>0;  1continue;    }  1i=$clone((h=f>>>4<<24>>>24,((h<0||h>=C.length)?($throwRuntimeError("index out of range"),undefined):C[h])),B);  17k=(j=d+1>>0,((j<0||j>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+j]));    if(k<i.lo||i.hi<k){  1hg=1;    }else if(g===2){    }else{  1�m=(l=d+2>>0,((l<0||l>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+l]));    if(m<128||191<m){  1�g=1;    }else if(g===3){    }else{  1�o=(n=d+3>>0,((n<0||n>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+n]));    if(o<128||191<o){  2g=1;    }    }    }  2d=d+(g)>>0;    }  2-return c;    };$pkg.RuneCount=N;	RuneCountunicode/utf8.RuneCountunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.RuneCountInStringunicode/utf8RuneCountInString O��O=function(a){var a,b,c,d,e,f,g,h,i,j,k,l;b=0;  2�c=a.length;  2�d=0;while(true){if(!(d<c)){break;}  2�e=a.charCodeAt(d);    if(e<128){  3d=d+(1)>>0;  2�b=b+(1)>>0;    continue;    }  3f=((e<0||e>=A.length)?($throwRuntimeError("index out of range"),undefined):A[e]);    if(f===241){  3>d=d+(1)>>0;  2�b=b+(1)>>0;    continue;    }  3`g=((((f&7)>>>0)>>0));    if((d+g>>0)>c){  3�d=d+(1)>>0;  2�b=b+(1)>>0;    continue;    }  3�i=$clone((h=f>>>4<<24>>>24,((h<0||h>=C.length)?($throwRuntimeError("index out of range"),undefined):C[h])),B);  3�j=a.charCodeAt((d+1>>0));    if(j<i.lo||i.hi<j){  4g=1;    }else if(g===2){    }else{  44k=a.charCodeAt((d+2>>0));    if(k<128||191<k){  4[g=1;    }else if(g===3){    }else{  4�l=a.charCodeAt((d+3>>0));    if(l<128||191<l){  4�g=1;    }    }    }  4�d=d+(g)>>0;  2�b=b+(1)>>0;    }    b=b;return b;    };$pkg.RuneCountInString=O;RuneCountInStringunicode/utf8.RuneCountInStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.RuneStartunicode/utf8	RuneStart PPP=function(a){var a;  5�return!((((a&192)>>>0)===128));    };$pkg.RuneStart=P;	RuneStartunicode/utf8.RuneStart unicode/utf8.Validunicode/utf8Valid Q��Q=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;  6rwhile(true){if(!(a.$length>=8)){break;}  7eb=((((((((0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0])>>>0))|((((1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1])>>>0))<<8>>>0))>>>0)|((((2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2])>>>0))<<16>>>0))>>>0)|((((3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3])>>>0))<<24>>>0))>>>0;  7�c=((((((((4>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+4])>>>0))|((((5>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+5])>>>0))<<8>>>0))>>>0)|((((6>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+6])>>>0))<<16>>>0))>>>0)|((((7>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+7])>>>0))<<24>>>0))>>>0;    if(!(((((((b|c)>>>0))&2155905152)>>>0)===0))){  8abreak;    }  8ma=$subslice(a,8);    }  8{d=a.$length;  8�e=0;while(true){if(!(e<d)){break;}  8�f=((e<0||e>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+e]);    if(f<128){  8�e=e+(1)>>0;  8�continue;    }  8�g=((f<0||f>=A.length)?($throwRuntimeError("index out of range"),undefined):A[f]);    if(g===241){  8�return false;    }  9%h=((((g&7)>>>0)>>0));    if((e+h>>0)>d){  9Mreturn false;    }  9uj=$clone((i=g>>>4<<24>>>24,((i<0||i>=C.length)?($throwRuntimeError("index out of range"),undefined):C[i])),B);  9�l=(k=e+1>>0,((k<0||k>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+k]));    if(l<j.lo||j.hi<l){  9�return false;    }else if(h===2){    }else{  9�n=(m=e+2>>0,((m<0||m>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+m]));    if(n<128||191<n){  : return false;    }else if(h===3){    }else{  :Qp=(o=e+3>>0,((o<0||o>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+o]));    if(p<128||191<p){  :xreturn false;    }    }    }  :�e=e+(h)>>0;    }  :�return true;    };$pkg.Valid=Q;Validunicode/utf8.Validunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.ValidStringunicode/utf8ValidString R�R=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m;  ;iwhile(true){if(!(a.length>=8)){break;}  <\b=(((((((a.charCodeAt(0)>>>0))|(((a.charCodeAt(1)>>>0))<<8>>>0))>>>0)|(((a.charCodeAt(2)>>>0))<<16>>>0))>>>0)|(((a.charCodeAt(3)>>>0))<<24>>>0))>>>0;  <�c=(((((((a.charCodeAt(4)>>>0))|(((a.charCodeAt(5)>>>0))<<8>>>0))>>>0)|(((a.charCodeAt(6)>>>0))<<16>>>0))>>>0)|(((a.charCodeAt(7)>>>0))<<24>>>0))>>>0;    if(!(((((((b|c)>>>0))&2155905152)>>>0)===0))){  =Xbreak;    }  =da=$substring(a,8);    }  =rd=a.length;  =�e=0;while(true){if(!(e<d)){break;}  =�f=a.charCodeAt(e);    if(f<128){  =�e=e+(1)>>0;  =�continue;    }  =�g=((f<0||f>=A.length)?($throwRuntimeError("index out of range"),undefined):A[f]);    if(g===241){  =�return false;    }  >h=((((g&7)>>>0)>>0));    if((e+h>>0)>d){  >Dreturn false;    }  >lj=$clone((i=g>>>4<<24>>>24,((i<0||i>=C.length)?($throwRuntimeError("index out of range"),undefined):C[i])),B);  >�k=a.charCodeAt((e+1>>0));    if(k<j.lo||j.hi<k){  >�return false;    }else if(h===2){    }else{  >�l=a.charCodeAt((e+2>>0));    if(l<128||191<l){  ?return false;    }else if(h===3){    }else{  ?Hm=a.charCodeAt((e+3>>0));    if(m<128||191<m){  ?oreturn false;    }    }    }  ?�e=e+(h)>>0;    }  ?�return true;    };$pkg.ValidString=R;ValidStringunicode/utf8.ValidStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.ValidRuneunicode/utf8	ValidRune S��S=function(a){var a;    if(0<=a&&a<55296){  @qreturn true;    }else if(57343<a&&a<=1114111){  @�return true;    }  @�return false;    };$pkg.ValidRune=S;	ValidRuneunicode/utf8.ValidRune ��{"Base":16583,"Files":[{"Name":"/usr/local/go/src/unicode/utf8/utf8.go","Base":1,"Size":16581,"Lines":[0,55,109,159,160,238,323,366,379,380,437,492,567,568,608,616,697,800,863,954,956,957,1020,1028,1051,1074,1076,1077,1085,1102,1119,1136,1153,1170,1187,1188,1208,1228,1248,1268,1269,1290,1312,1334,1335,1389,1408,1427,1428,1504,1577,1649,1691,1721,1749,1780,1811,1842,1873,1904,1935,1966,1968,1969,2035,2059,2123,2201,2279,2357,2435,2513,2591,2669,2747,2811,2889,2967,3045,3123,3201,3279,3357,3435,3437,3438,3516,3529,3555,3598,3642,3644,3645,3722,3758,3776,3794,3812,3830,3848,3850,3851,3938,4034,4065,4078,4091,4106,4109,4127,4147,4189,4192,4222,4252,4306,4320,4371,4385,4388,4402,4404,4405,4469,4508,4521,4534,4549,4552,4570,4590,4633,4636,4666,4696,4750,4764,4815,4829,4832,4846,4848,4849,4926,5004,5079,5120,5123,5198,5270,5314,5361,5374,5386,5408,5411,5423,5439,5453,5523,5595,5640,5698,5744,5747,5765,5795,5808,5830,5833,5845,5884,5906,5909,5993,6040,6043,6055,6084,6106,6109,6123,6191,6194,6206,6235,6257,6260,6348,6350,6351,6427,6505,6583,6593,6596,6671,6743,6787,6842,6855,6867,6889,6892,6904,6920,6934,7004,7076,7121,7179,7225,7228,7246,7276,7289,7311,7314,7326,7365,7387,7390,7474,7521,7524,7536,7565,7587,7590,7604,7672,7675,7687,7716,7738,7741,7829,7831,7832,7912,7990,8065,8106,8109,8184,8256,8300,8351,8366,8381,8403,8406,8424,8444,8463,8477,8480,8530,8583,8602,8623,8637,8647,8650,8688,8715,8724,8728,8731,8747,8759,8762,8798,8822,8844,8847,8863,8865,8866,8945,9025,9096,9116,9119,9194,9266,9310,9369,9384,9399,9421,9424,9442,9462,9481,9495,9498,9548,9601,9620,9641,9655,9665,9668,9706,9733,9742,9746,9749,9765,9777,9780,9824,9848,9870,9873,9889,9891,9892,9960,10030,10057,10067,10080,10092,10113,10124,10145,10156,10202,10214,10235,10246,10266,10277,10280,10291,10293,10294,10383,10452,10495,10535,10612,10638,10659,10676,10687,10708,10746,10771,10799,10810,10869,10885,10899,10920,10958,10984,11015,11043,11054,11064,11102,11128,11160,11191,11219,11230,11233,11235,11236,11302,11363,11404,11447,11507,11535,11563,11566,11599,11601,11602,11653,11730,11756,11777,11829,11888,11904,11918,11939,12013,12023,12119,12122,12124,12125,12192,12250,12281,12295,12306,12329,12335,12347,12367,12389,12396,12408,12412,12428,12443,12462,12474,12478,12499,12518,12546,12558,12562,12593,12644,12656,12680,12728,12740,12764,12812,12824,12828,12840,12843,12853,12855,12856,12922,12965,12979,13006,13018,13038,13060,13067,13079,13083,13099,13114,13133,13145,13149,13170,13189,13217,13229,13233,13264,13315,13327,13351,13399,13411,13435,13483,13495,13499,13511,13514,13524,13526,13527,13604,13682,13701,13755,13756,13831,13859,13936,13955,14019,14053,14122,14178,14260,14343,14385,14429,14438,14442,14454,14457,14470,14492,14505,14526,14533,14545,14549,14566,14581,14622,14626,14647,14665,14702,14706,14737,14788,14804,14828,14876,14892,14916,14964,14980,14984,14996,14999,15012,15014,15015,15096,15130,15207,15226,15290,15324,15393,15449,15531,15614,15656,15700,15709,15713,15725,15728,15741,15763,15776,15797,15804,15816,15820,15837,15852,15893,15897,15918,15936,15973,15977,16008,16059,16075,16099,16147,16163,16187,16235,16251,16255,16267,16270,16283,16285,16286,16350,16420,16450,16460,16494,16508,16548,16562,16565,16579],"Infos":null}]}
   گ��)w� < 