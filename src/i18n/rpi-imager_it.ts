<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it_IT">
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="196"/>
        <location filename="../downloadextractthread.cpp" line="385"/>
        <source>Error extracting archive: %1</source>
        <translation>Errore estrazione archivio: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="261"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Errore montaggio partizione FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="281"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>Il sistema operativo non ha montato la partizione FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="304"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Errore passaggio a cartella &apos;%1&apos;</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="118"/>
        <source>unmounting drive</source>
        <translation>smontaggio unità</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="138"/>
        <source>opening drive</source>
        <translation>apertura unità</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="166"/>
        <source>Error running diskpart: %1</source>
        <translation>Errore esecuzione diskpart: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="187"/>
        <source>Error removing existing partitions</source>
        <translation>Errore rimozione partizioni esistenti</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="213"/>
        <source>Authentication cancelled</source>
        <translation>Autenticazione annullata</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="216"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Errore esecuzione auhopen per ottenere accesso al dispositivo disco %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="217"/>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>Verifica se a &apos;Raspberry Pi Imager&apos; è consentito l&apos;accesso a &apos;volumi rimovibili&apos; nelle impostazioni privacy (in &apos;file e cartelle&apos; o in alternativa concedi &apos;accesso completo al disco&apos;).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="239"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>Impossibile aprire dispositivo storage &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="281"/>
        <source>discarding existing data on drive</source>
        <translation>elimina i dati esistenti nell&apos;unità</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="301"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>azzera il primo e l&apos;ultimo MB dell&apos;unità</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="307"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Errore scrittura durante azzeramento MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="319"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>Errore di scrittura durante il tentativo di azzerare l&apos;ultima parte della scheda.&lt;br&gt;La scheda potrebbe riportare una capacità maggiore di quella reale (possibile contraffazione).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="408"/>
        <source>starting download</source>
        <translation>avvio download</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="466"/>
        <source>Error downloading: %1</source>
        <translation>Errore download: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="663"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>Errore accesso negato durante la scrittura del file su disco.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="668"/>
        <source>Controlled Folder Access seems to be enabled. Please add both rpi-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>Sembra sia abilitato l&apos;accesso controllato alle cartelle. 
Aggiungi sia &apos;rpi-imager.exe&apos; che &apos;fat32format.exe&apos; all&apos;elenco delle app consentite e riprova.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="675"/>
        <source>Error writing file to disk</source>
        <translation>Errore scrittura file su disco</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="697"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Download corrotto.&lt;br&gt;L&apos;hash non corrisponde</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="709"/>
        <location filename="../downloadthread.cpp" line="761"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Errore scrittura nello storage (durante flushing)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="716"/>
        <location filename="../downloadthread.cpp" line="768"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Errore scrittura nello storage (durante fsync)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="751"/>
        <source>Error writing first block (partition table)</source>
        <translation>Errore scrittura primo blocco (tabella partizione)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="826"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>Errore lettura dallo storage.&lt;br&gt;La scheda SD potrebbe essere danneggiata.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="845"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>Verifica scrittura fallita.&lt;br&gt;Il contenuto della SD è differente da quello che vi è stato scritto.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="898"/>
        <source>Customizing image</source>
        <translation>Personalizza immagine</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>Errore partizionamento: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Errore avvio fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Errore esecuzione fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Errore determinazione nuova lettera unità</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Dispositivo non valido: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Errore formattazione (attraverso udisk2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>Errore avvio sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation>Il partizionamento non ha creato la partizione FAT prevista %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>Errore avvio mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Errore esecuzione mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>Formattazione non implementata per questa piattaforma</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="248"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>La capacità dello storage non è sufficiente.&lt;br&gt;Sono necessari almeno %1 GB.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="254"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>Il file sorgente non è un&apos;immagine disco valida.&lt;br&gt;La dimensione file %1 non è un multiplo di 512 byte.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="442"/>
        <source>Downloading and writing image</source>
        <translation>Download e scrittura file immagine</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="575"/>
        <source>Select image</source>
        <translation>Seleziona file immagine</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="896"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>Vuoi precompilare la password WiFi usando il portachiavi di sistema?</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>apertura file immagine</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>Errore durante l&apos;apertura del file immagine</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="98"/>
        <source>NO</source>
        <translation>NO</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="109"/>
        <source>YES</source>
        <translation>SI</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="120"/>
        <source>CONTINUE</source>
        <translation>CONTINUA</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="130"/>
        <source>QUIT</source>
        <translation>ESCI</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="20"/>
        <source>OS Customization</source>
        <translation>Personalizzazione SO</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="52"/>
        <source>OS customization options</source>
        <translation>Opzioni personalizzazione SO</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="57"/>
        <source>for this session only</source>
        <translation>solo per questa sessione</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="58"/>
        <source>to always use</source>
        <translation>da usare sempre</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="71"/>
        <source>General</source>
        <translation>Generale</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="79"/>
        <source>Services</source>
        <translation>Servizi</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="82"/>
        <source>Options</source>
        <translation>Opzioni</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="98"/>
        <source>Set hostname:</source>
        <translation>Imposta nome host:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="120"/>
        <source>Set username and password</source>
        <translation>Imposta nome utente e password</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="142"/>
        <source>Username:</source>
        <translation>Nome utente:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="158"/>
        <location filename="../OptionsPopup.qml" line="219"/>
        <source>Password:</source>
        <translation>Password:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="186"/>
        <source>Configure wireless LAN</source>
        <translation>Configura WiFi</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="205"/>
        <source>SSID:</source>
        <translation>SSID:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="238"/>
        <source>Show password</source>
        <translation>Visualizza password</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="244"/>
        <source>Hidden SSID</source>
        <translation>SSID nascosto</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="250"/>
        <source>Wireless LAN country:</source>
        <translation>Nazione WiFi:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="261"/>
        <source>Set locale settings</source>
        <translation>Imposta configurazioni locali</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="271"/>
        <source>Time zone:</source>
        <translation>Fuso orario:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="281"/>
        <source>Keyboard layout:</source>
        <translation>Layout tastiera:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="298"/>
        <source>Enable SSH</source>
        <translation>Abilita SSH</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="317"/>
        <source>Use password authentication</source>
        <translation>Usa password autenticazione</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="327"/>
        <source>Allow public-key authentication only</source>
        <translation>Permetti solo autenticazione con chiave pubblica</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="345"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>Imposta authorized_keys per &apos;%1&apos;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="357"/>
        <source>RUN SSH-KEYGEN</source>
        <translation>ESEGUI SSH-KEYGEN</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="375"/>
        <source>Play sound when finished</source>
        <translation>Riproduci suono quando completato</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="379"/>
        <source>Eject media when finished</source>
        <translation>Espelli media quando completato</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="383"/>
        <source>Enable telemetry</source>
        <translation>Abilita telemetria</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="397"/>
        <source>SAVE</source>
        <translation>SALVA</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="119"/>
        <source>Internal SD card reader</source>
        <translation>Lettore scheda SD interno</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="73"/>
        <source>Use OS customization?</source>
        <translation>Vuoi usare la personalizzaizone SO?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="87"/>
        <source>Would you like to apply OS customization settings?</source>
        <translation>Vuoi applicare le impostazioni personalizzazione sistema operativo?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="97"/>
        <source>NO</source>
        <translation>NO</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="107"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>NO, AZZERA IMPOSTAZIONI</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="117"/>
        <source>YES</source>
        <translation>SI&apos;</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="127"/>
        <source>EDIT SETTINGS</source>
        <translation>MODIFICA IMPOSTAZIONI</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="22"/>
        <source>Raspberry Pi Imager v%1</source>
        <translation>Raspberry Pi Imager v. %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <location filename="../main.qml" line="467"/>
        <source>Raspberry Pi Device</source>
        <translation>Dispositivo Raspberry Pi</translation>
    </message>
    <message>
        <location filename="../main.qml" line="126"/>
        <source>CHOOSE DEVICE</source>
        <translation>SCEGLI DISPOSITIVO</translation>
    </message>
    <message>
        <location filename="../main.qml" line="138"/>
        <source>Select this button to choose your target Raspberry Pi</source>
        <translation>Seleziona questo pulsante per scegliere il Raspberry Pi destinazione</translation>
    </message>
    <message>
        <location filename="../main.qml" line="97"/>
        <location filename="../main.qml" line="413"/>
        <source>Operating System</source>
        <translation>Sistema operativo</translation>
    </message>
    <message>
        <location filename="../main.qml" line="109"/>
        <source>CHOOSE OS</source>
        <translation>SCEGLI S.O.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="121"/>
        <source>Select this button to change the operating system</source>
        <translation>Seleziona questo pulsante per modificare il sistema operativo scelto</translation>
    </message>
    <message>
        <location filename="../main.qml" line="133"/>
        <location filename="../main.qml" line="780"/>
        <source>Storage</source>
        <translation>Scheda SD</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1007"/>
        <source>No storage devices found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="145"/>
        <location filename="../main.qml" line="1108"/>
        <source>CHOOSE STORAGE</source>
        <translation>SCEGLI SCHEDA SD</translation>
    </message>
    <message>
        <location filename="../main.qml" line="171"/>
        <source>WRITE</source>
        <translation>SCRIVI</translation>
    </message>
    <message>
        <location filename="../main.qml" line="155"/>
        <source>Select this button to change the destination storage device</source>
        <translation>Seleziona questo pulsante per modificare il dispositivo archiviazione destinazione</translation>
    </message>
    <message>
        <location filename="../main.qml" line="216"/>
        <source>CANCEL WRITE</source>
        <translation>ANNULLA SCRITTURA</translation>
    </message>
    <message>
        <location filename="../main.qml" line="219"/>
        <location filename="../main.qml" line="1035"/>
        <source>Cancelling...</source>
        <translation>Annullamento...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="227"/>
        <source>CANCEL VERIFY</source>
        <translation>ANNULLA VERIFICA</translation>
    </message>
    <message>
        <location filename="../main.qml" line="230"/>
        <location filename="../main.qml" line="1058"/>
        <location filename="../main.qml" line="1127"/>
        <source>Finalizing...</source>
        <translation>Finalizzazione...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="288"/>
        <source>Next</source>
        <translation>Avanti</translation>
    </message>
    <message>
        <location filename="../main.qml" line="175"/>
        <source>Select this button to start writing the image</source>
        <translation>Seleziona questo pulsante per avviare la scrittura del file immagine</translation>
    </message>
    <message>
        <location filename="../main.qml" line="245"/>
        <source>Select this button to access advanced settings</source>
        <translation>Seleziona questo pulsante per accedere alle impostazioni avanzate</translation>
    </message>
    <message>
        <location filename="../main.qml" line="259"/>
        <source>Using custom repository: %1</source>
        <translation>Usa repository personalizzato: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="268"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation>Navigazione da tastiera: &lt;tab&gt; vai al prossimo pulsante &lt;spazio&gt; premi il pulsante/seleziona la voce &lt;freccia su/giù&gt; vai su/giù negli elenchi</translation>
    </message>
    <message>
        <location filename="../main.qml" line="289"/>
        <source>Language: </source>
        <translation>Lingua: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="312"/>
        <source>Keyboard: </source>
        <translation>Tastiera: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="437"/>
        <source>Pi model:</source>
        <translation>Modello Pi:</translation>
    </message>
    <message>
        <location filename="../main.qml" line="448"/>
        <source>[ All ]</source>
        <translation>[ Tutti ]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="528"/>
        <source>Back</source>
        <translation>Indietro</translation>
    </message>
    <message>
        <location filename="../main.qml" line="529"/>
        <source>Go back to main menu</source>
        <translation>Torna al menu principale</translation>
    </message>
    <message>
        <location filename="../main.qml" line="695"/>
        <source>Released: %1</source>
        <translation>Rilasciato: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="705"/>
        <source>Cached on your computer</source>
        <translation>Memorizzato temporaneamente nel computer</translation>
    </message>
    <message>
        <location filename="../main.qml" line="707"/>
        <source>Local file</source>
        <translation>File locale</translation>
    </message>
    <message>
        <location filename="../main.qml" line="708"/>
        <source>Online - %1 GB download</source>
        <translation>Online - Download %1 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="833"/>
        <location filename="../main.qml" line="885"/>
        <location filename="../main.qml" line="891"/>
        <source>Mounted as %1</source>
        <translation>Montato come %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="887"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[PROTETTA DA SCRITTURA]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="929"/>
        <source>Are you sure you want to quit?</source>
        <translation>Sei sicuro di voler uscire?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="930"/>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Raspberry Pi Image è occupato.&lt;br&gt;Sei sicuro di voler uscire?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="941"/>
        <source>Warning</source>
        <translation>Attenzione</translation>
    </message>
    <message>
        <location filename="../main.qml" line="949"/>
        <source>Preparing to write...</source>
        <translation>Preparazione scrittura...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="962"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Tutti i dati esistenti in &apos;%1&apos; verranno eliminati.&lt;br&gt;Sei sicuro di voler continuare?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="973"/>
        <source>Update available</source>
        <translation>Aggiornamento disponibile</translation>
    </message>
    <message>
        <location filename="../main.qml" line="974"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>È disponibile una nuova versione di Imager.&lt;br&gt;Vuoi visitare il sito web per scaricare la nuova versione?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1017"/>
        <source>Error downloading OS list from Internet</source>
        <translation>Errore durante download elenco SO da internet</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1038"/>
        <source>Writing... %1%</source>
        <translation>Scrittura...%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1061"/>
        <source>Verifying... %1%</source>
        <translation>Verifica...%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1068"/>
        <source>Preparing to write... (%1)</source>
        <translation>Preparazione scrittura... (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1084"/>
        <source>Error</source>
        <translation>Errore</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1091"/>
        <source>Write Successful</source>
        <translation>Scrittura completata senza errori</translation>
    </message>
    <message>
        <location filename="../main.qml" line="572"/>
        <location filename="../main.qml" line="1092"/>
        <source>Erase</source>
        <translation>Cancella</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1093"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>Azzeramento di &lt;b&gt;%1&lt;/b&gt; completato&lt;br&gt;&lt;br&gt;Ora puoi rimuovere la scheda SD dal lettore</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1100"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>Scrittura di &lt;b&gt;%1&lt;/b&gt; in &lt;b&gt;%2&lt;/b&gt; completata&lt;br&gt;&lt;br&gt;Ora puoi rimuovere la scheda SD dal lettore</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1202"/>
        <source>Error parsing os_list.json</source>
        <translation>Errore durante analisi file os_list.json</translation>
    </message>
    <message>
        <location filename="../main.qml" line="573"/>
        <source>Format card as FAT32</source>
        <translation>Formatta scheda come FAT32</translation>
    </message>
    <message>
        <location filename="../main.qml" line="582"/>
        <source>Use custom</source>
        <translation>Usa immagine personalizzata</translation>
    </message>
    <message>
        <location filename="../main.qml" line="583"/>
        <source>Select a custom .img from your computer</source>
        <translation>Seleziona un file immagine .img personalizzato</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1391"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Prima collega una chiavetta USB contenente il file immagine.&lt;br&gt;Il file immagine deve essere presente nella cartella principale della chiavetta USB.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1407"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>La scheda SD è protetta da scrittura.&lt;br&gt;Sposta verso l&apos;alto l&apos;interruttore LOCK sul lato sinistro della scheda SD e riprova.</translation>
    </message>
</context>
</TS>
