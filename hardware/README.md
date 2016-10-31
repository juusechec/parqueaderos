
#Módulo WIFI ESP8266
--------------------
Este módulo se comunica por protocolo serial (UART http://www.mbedded.ninja/electronics/communication-protocols/uart-protocol) a una taza predeterminada de 115200 baudios (bits por segundo https://www.arduino.cc/en/Serial/Begin). 

* Guía rápida de inicio con el módulo WiFi ESP8266, contiene recomendaciones, conexiones y ejemplo de comandos AT se usa con Arduino UNO pero no se recomienda alimentación desde esta, se da alternativamente instrucciones para FTDI 3.3V Board. http://rancidbacon.com/files/kiwicon8/ESP8266_WiFi_Module_Quick_Start_Guide_v_1.0.4.pdf
* Se da una presentación de conexión de pines completa para todo el módulo, se realiza también una forma de actualizar el firmware del dispositivo. http://www.instructables.com/id/The-First-Usage-of-ESP8266-With-Arduino-Uno/
* Se destaca por dar un ejemplo de comandos AT. http://rayshobby.net/first-impression-on-the-esp8266-serial-to-wifi-module/
* Es el datasheet del integrado base, se destaca la muestra de potencia consumida en modo Transmisor, Receptor y en estados de hibernación. http://www.electroschematics.com/wp-content/uploads/2015/02/esp8266-datasheet.pdf
* Muestra de otra forma la documentación habitual, tiene documentación de los comandos AT sin ejemplos. https://nurdspace.nl/ESP8266
* Conexión del módulo for dummies (torpes). http://www.teomaragakis.com/hardware/electronics/how-to-connect-an-esp8266-to-an-arduino-uno/
* Se muestra un mapa conceptual de los comandos AT con ejemplos y una lista extendida de ellos. Referencias de documentación, características técnicas y la forma de actualizar el firmware. https://www.itead.cc/wiki/ESP8266_Serial_WIFI_Module
* Contiene información necesaria para configurar el módulo como un Access Point. http://dominicm.com/esp8266-configure-access-point/
* La wiki definitiva para los comandos AT: https://github.com/espressif/ESP8266_AT/wiki

#Módulo Ultrasonido MB1010 LV-MaxSonar®-EZ1
-------------------------------------------
Este módulo se utiliza para detectar la presencia o ausencia de objetos, este se puede controlar por medio de 3 métodos, el análogo, el PWM y con comunicación serial. El más acosejable es PWM (http://playground.arduino.cc/Main/MaxSonar).

* Documentación oficial de implementación del sensor. http://www.maxbotix.com/articles/085.htm
* Características técnicas del dispositivo sumado a enlaces del datasheet, explicaciones, guía de selección del sensores de la misma familia. https://www.sparkfun.com/products/8502

#Módulo RF 433MHz Transmisor y Receptor
* https://www.youtube.com/watch?v=h3OevEdl674 https://github.com/Simsso/Arduino-Wireless-Module-Multiple-Receivers
* http://electronics.stackexchange.com/questions/74272/how-to-connect-20-wireless-sensors-in-one-receiver-with-arduino
* http://www.electronicsmayhem.com/?p=68
* https://www.sparkfun.com/products/10532
* https://www.sparkfun.com/products/10534
* http://www.electronicsmayhem.com/?p=68
* http://www.instructables.com/id/RF-315433-MHz-Transmitter-receiver-Module-and-Ardu/?ALLSTEPS
* https://github.com/sui77/rc-switch
* http://www.pjrc.com/teensy/td_libs_VirtualWire.html
