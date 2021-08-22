const options = [
  {value:'4th Dimension/4D', label:'4th Dimension/4D'},
  {value:'ABAP', label:'ABAP'},
  {value:'ABC', label:'ABC'},
  {value:'ActionScript', label:'ActionScript'},
  {value:'Ada', label:'Ada'},
  {value:'Agilent VEE', label:'Agilent VEE'},
  {value:'Algol', label:'Algol'},
  {value:'Alice', label:'Alice'},
  {value:'Angelscript', label:'Angelscript'},
  {value:'Apex', label:'Apex'},
  {value:'APL', label:'APL'},
  {value:'AppleScript', label:'AppleScript'},
  {value:'Arc', label:'Arc'},
  {value:'Arduino', label:'Arduino'},
  {value:'ASP', label:'ASP'},
  {value:'AspectJ', label:'AspectJ'},
  {value:'Assembly', label:'Assembly'},
  {value:'ATLAS', label:'ATLAS'},
  {value:'Augeas', label:'Augeas'},
  {value:'AutoHotkey', label:'AutoHotkey'},
  {value:'AutoIt', label:'AutoIt'},
  {value:'AutoLISP', label:'AutoLISP'},
  {value:'Automator', label:'Automator'},
  {value:'Avenue', label:'Avenue'},
  {value:'Awk', label:'Awk'},
  {value:'Bash', label:'Bash'},
  {value:'(Visual) Basic', label:'(Visual) Basic'},
  {value:'bc', label:'bc'},
  {value:'BCPL', label:'BCPL'},
  {value:'BETA', label:'BETA'},
  {value:'BlitzMax', label:'BlitzMax'},
  {value:'Boo', label:'Boo'},
  {value:'Bourne Shell', label:'Bourne Shell'},
  {value:'Bro', label:'Bro'},
  {value:'C', label:'C'},
  {value:'C Shell', label:'C Shell'},
  {value:'C#', label:'C#'},
  {value:'C++', label:'C++'},
  {value:'C++/CLI', label:'C++/CLI'},
  {value:'C-Omega', label:'C-Omega'},
  {value:'Caml', label:'Caml'},
  {value:'Ceylon', label:'Ceylon'},
  {value:'CFML', label:'CFML'},
  {value:'cg', label:'cg'},
  {value:'Ch', label:'Ch'},
  {value:'CHILL', label:'CHILL'},
  {value:'CIL', label:'CIL'},
  {value:'CL (OS/400)', label:'CL (OS/400)'},
  {value:'Clarion', label:'Clarion'},
  {value:'Clean', label:'Clean'},
  {value:'Clipper', label:'Clipper'},
  {value:'Clojure', label:'Clojure'},
  {value:'CLU', label:'CLU'},
  {value:'COBOL', label:'COBOL'},
  {value:'Cobra', label:'Cobra'},
  {value:'CoffeeScript', label:'CoffeeScript'},
  {value:'ColdFusion', label:'ColdFusion'},
  {value:'COMAL', label:'COMAL'},
  {value:'Common Lisp', label:'Common Lisp'},
  {value:'Coq', label:'Coq'},
  {value:'cT', label:'cT'},
  {value:'Curl', label:'Curl'},
  {value:'D', label:'D'},
  {value:'Dart', label:'Dart'},
  {value:'DCL', label:'DCL'},
  {value:'DCPU-16 ASM', label:'DCPU-16 ASM'},
  {value:'Delphi/Object Pascal', label:'Delphi/Object Pascal'},
  {value:'DiBOL', label:'DiBOL'},
  {value:'Dylan', label:'Dylan'},
  {value:'E', label:'E'},
  {value:'eC', label:'eC'},
  {value:'Ecl', label:'Ecl'},
  {value:'ECMAScript', label:'ECMAScript'},
  {value:'EGL', label:'EGL'},
  {value:'Eiffel', label:'Eiffel'},
  {value:'Elixir', label:'Elixir'},
  {value:'Emacs Lisp', label:'Emacs Lisp'},
  {value:'Erlang', label:'Erlang'},
  {value:'Etoys', label:'Etoys'},
  {value:'Euphoria', label:'Euphoria'},
  {value:'EXEC', label:'EXEC'},
  {value:'F#', label:'F#'},
  {value:'Factor', label:'Factor'},
  {value:'Falcon', label:'Falcon'},
  {value:'Fancy', label:'Fancy'},
  {value:'Fantom', label:'Fantom'},
  {value:'Felix', label:'Felix'},
  {value:'Forth', label:'Forth'},
  {value:'Fortran', label:'Fortran'},
  {value:'Fortress', label:'Fortress'},
  {value:'(Visual) FoxPro', label:'(Visual) FoxPro'},
  {value:'Gambas', label:'Gambas'},
  {value:'GNU Octave', label:'GNU Octave'},
  {value:'Go', label:'Go'},
  {value:'Google AppsScript', label:'Google AppsScript'},
  {value:'Gosu', label:'Gosu'},
  {value:'Groovy', label:'Groovy'},
  {value:'Haskell', label:'Haskell'},
  {value:'haXe', label:'haXe'},
  {value:'Heron', label:'Heron'},
  {value:'HPL', label:'HPL'},
  {value:'HyperTalk', label:'HyperTalk'},
  {value:'Icon', label:'Icon'},
  {value:'IDL', label:'IDL'},
  {value:'Inform', label:'Inform'},
  {value:'Informix-4GL', label:'Informix-4GL'},
  {value:'INTERCAL', label:'INTERCAL'},
  {value:'Io', label:'Io'},
  {value:'Ioke', label:'Ioke'},
  {value:'J', label:'J'},
  {value:'J#', label:'J#'},
  {value:'JADE', label:'JADE'},
  {value:'Java', label:'Java'},
  {value:'Java FX Script', label:'Java FX Script'},
  {value:'JavaScript', label:'JavaScript'},
  {value:'JScript', label:'JScript'},
  {value:'JScript.NET', label:'JScript.NET'},
  {value:'Julia', label:'Julia'},
  {value:'Korn Shell', label:'Korn Shell'},
  {value:'Kotlin', label:'Kotlin'},
  {value:'LabVIEW', label:'LabVIEW'},
  {value:'Ladder Logic', label:'Ladder Logic'},
  {value:'Lasso', label:'Lasso'},
  {value:'Limbo', label:'Limbo'},
  {value:'Lingo', label:'Lingo'},
  {value:'Lisp', label:'Lisp'},
  {value:'Logo', label:'Logo'},
  {value:'Logtalk', label:'Logtalk'},
  {value:'LotusScript', label:'LotusScript'},
  {value:'LPC', label:'LPC'},
  {value:'Lua', label:'Lua'},
  {value:'Lustre', label:'Lustre'},
  {value:'M4', label:'M4'},
  {value:'MAD', label:'MAD'},
  {value:'Magic', label:'Magic'},
  {value:'Magik', label:'Magik'},
  {value:'Malbolge', label:'Malbolge'},
  {value:'MANTIS', label:'MANTIS'},
  {value:'Maple', label:'Maple'},
  {value:'Mathematica', label:'Mathematica'},
  {value:'MATLAB', label:'MATLAB'},
  {value:'Max/MSP', label:'Max/MSP'},
  {value:'MAXScript', label:'MAXScript'},
  {value:'MEL', label:'MEL'},
  {value:'Mercury', label:'Mercury'},
  {value:'Mirah', label:'Mirah'},
  {value:'Miva', label:'Miva'},
  {value:'ML', label:'ML'},
  {value:'Monkey', label:'Monkey'},
  {value:'Modula-2', label:'Modula-2'},
  {value:'Modula-3', label:'Modula-3'},
  {value:'MOO', label:'MOO'},
  {value:'Moto', label:'Moto'},
  {value:'MS-DOS Batch', label:'MS-DOS Batch'},
  {value:'MUMPS', label:'MUMPS'},
  {value:'NATURAL', label:'NATURAL'},
  {value:'Nemerle', label:'Nemerle'},
  {value:'Nimrod', label:'Nimrod'},
  {value:'NQC', label:'NQC'},
  {value:'NSIS', label:'NSIS'},
  {value:'Nu', label:'Nu'},
  {value:'NXT-G', label:'NXT-G'},
  {value:'Oberon', label:'Oberon'},
  {value:'Object Rexx', label:'Object Rexx'},
  {value:'Objective-C', label:'Objective-C'},
  {value:'Objective-J', label:'Objective-J'},
  {value:'OCaml', label:'OCaml'},
  {value:'Occam', label:'Occam'},
  {value:'ooc', label:'ooc'},
  {value:'Opa', label:'Opa'},
  {value:'OpenCL', label:'OpenCL'},
  {value:'OpenEdge ABL', label:'OpenEdge ABL'},
  {value:'OPL', label:'OPL'},
  {value:'Oz', label:'Oz'},
  {value:'Paradox', label:'Paradox'},
  {value:'Parrot', label:'Parrot'},
  {value:'Pascal', label:'Pascal'},
  {value:'Perl', label:'Perl'},
  {value:'PHP', label:'PHP'},
  {value:'Pike', label:'Pike'},
  {value:'PILOT', label:'PILOT'},
  {value:'PL/I', label:'PL/I'},
  {value:'PL/SQL', label:'PL/SQL'},
  {value:'Pliant', label:'Pliant'},
  {value:'PostScript', label:'PostScript'},
  {value:'POV-Ray', label:'POV-Ray'},
  {value:'PowerBasic', label:'PowerBasic'},
  {value:'PowerScript', label:'PowerScript'},
  {value:'PowerShell', label:'PowerShell'},
  {value:'Processing', label:'Processing'},
  {value:'Prolog', label:'Prolog'},
  {value:'Puppet', label:'Puppet'},
  {value:'Pure Data', label:'Pure Data'},
  {value:'Python', label:'Python'},
  {value:'Q', label:'Q'},
  {value:'R', label:'R'},
  {value:'Racket', label:'Racket'},
  {value:'REALBasic', label:'REALBasic'},
  {value:'REBOL', label:'REBOL'},
  {value:'Revolution', label:'Revolution'},
  {value:'REXX', label:'REXX'},
  {value:'RPG (OS/400)', label:'RPG (OS/400)'},
  {value:'Ruby', label:'Ruby'},
  {value:'Rust', label:'Rust'},
  {value:'S', label:'S'},
  {value:'S-PLUS', label:'S-PLUS'},
  {value:'SAS', label:'SAS'},
  {value:'Sather', label:'Sather'},
  {value:'Scala', label:'Scala'},
  {value:'Scheme', label:'Scheme'},
  {value:'Scilab', label:'Scilab'},
  {value:'Scratch', label:'Scratch'},
  {value:'sed', label:'sed'},
  {value:'Seed7', label:'Seed7'},
  {value:'Self', label:'Self'},
  {value:'Shell', label:'Shell'},
  {value:'SIGNAL', label:'SIGNAL'},
  {value:'Simula', label:'Simula'},
  {value:'Simulink', label:'Simulink'},
  {value:'Slate', label:'Slate'},
  {value:'Smalltalk', label:'Smalltalk'},
  {value:'Smarty', label:'Smarty'},
  {value:'SPARK', label:'SPARK'},
  {value:'SPSS', label:'SPSS'},
  {value:'SQR', label:'SQR'},
  {value:'Squeak', label:'Squeak'},
  {value:'Squirrel', label:'Squirrel'},
  {value:'Standard ML', label:'Standard ML'},
  {value:'Suneido', label:'Suneido'},
  {value:'SuperCollider', label:'SuperCollider'},
  {value:'TACL', label:'TACL'},
  {value:'Tcl', label:'Tcl'},
  {value:'Tex', label:'Tex'},
  {value:'thinBasic', label:'thinBasic'},
  {value:'TOM', label:'TOM'},
  {value:'Transact-SQL', label:'Transact-SQL'},
  {value:'Turing', label:'Turing'},
  {value:'TypeScript', label:'TypeScript'},
  {value:'Vala/Genie', label:'Vala/Genie'},
  {value:'VBScript', label:'VBScript'},
  {value:'Verilog', label:'Verilog'},
  {value:'VHDL', label:'VHDL'},
  {value:'VimL', label:'VimL'},
  {value:'Visual Basic .NET', label:'Visual Basic .NET'},
  {value:'WebDNA', label:'WebDNA'},
  {value:'Whitespace', label:'Whitespace'},
  {value:'X10', label:'X10'},
  {value:'xBase', label:'xBase'},
  {value:'XBase++', label:'XBase++'},
  {value:'Xen', label:'Xen'},
  {value:'XPL', label:'XPL'},
  {value:'XSLT', label:'XSLT'},
  {value:'XQuery', label:'XQuery'},
  {value:'yacc', label:'yacc'},
  {value:'Yorick', label:'Yorick'},
  {value:'Z shell', label:'Z shell'}
]

export {
  options
}