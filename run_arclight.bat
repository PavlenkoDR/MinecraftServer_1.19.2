@echo off
REM Forge requires a configured set of both JVM and program arguments.
REM Add custom JVM arguments to the user_jvm_args.txt
REM Add custom program arguments {such as nogui} to this file in the next line before the %* or
REM  pass them to this script directly
java -javaagent:authlib-injector-1.2.2.jar=ely.by @user_jvm_args.txt -jar arclight-forge-1.19.2-1.0.1.jar
pause
