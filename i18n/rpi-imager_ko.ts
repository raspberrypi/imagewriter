<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ko_KR">
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="167"/>
        <source>Error writing to storage</source>
        <translation>저장소에 쓰는 중 오류 발생</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="193"/>
        <location filename="../downloadextractthread.cpp" line="382"/>
        <source>Error extracting archive: %1</source>
        <translation>보관 파일 추출 오류: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="258"/>
        <source>Error mounting FAT32 partition</source>
        <translation>FAT32 파티션 마운트 오류</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="278"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>운영 체제에서 FAT32 파티션을 마운트하지 않음</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="301"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>디렉토리 변경 오류 &apos;%1&apos;</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="147"/>
        <source>Error running diskpart: %1</source>
        <translation>디스크 파트를 실행하는 동안 오류 발생 : %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="168"/>
        <source>Error removing existing partitions</source>
        <translation>기존 파티션 제거 오류</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="194"/>
        <source>Authentication cancelled</source>
        <translation>인증 취소됨</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="197"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>디스크 디바이스에 대한 액세스 권한을 얻기 위해 authopen을 실행하는 중 오류 발생 &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="198"/>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>확인합니다. if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="219"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>저장 장치를 열 수 없습니다 &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="261"/>
        <source>discarding existing data on drive</source>
        <translation>드라이브의 기존 데이터 삭제</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="281"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>드라이브의 처음과 마지막 MB를 비웁니다.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="287"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Write error while zero&apos;ing out MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="777"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>저장소에서 읽는 동안 오류가 발생했습니다.&lt;br&gt;SD 카드가 고장 났을 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="853"/>
        <source>Waiting for FAT partition to be mounted</source>
        <translation>FAT 파티션이 마운트되기를 기다리는 중</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="939"/>
        <source>Error mounting FAT32 partition</source>
        <translation>FAT32 파티션 마운트 오류</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="961"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>운영 체제 FAT32 파티션이 마운트되지 않았습니다.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="994"/>
        <source>Unable to customize. File &apos;%1&apos; does not exist.</source>
        <translation>지정할 수 없습니다. 파일이 &apos;%1&apos; 존재하지 않습니다.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="998"/>
        <source>Customizing image</source>
        <translation>이미지 사용자 정의</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1083"/>
        <source>Error creating firstrun.sh on FAT partition</source>
        <translation>FAT 파티션에 firstrun.sh을 만드는 동안 오류 발생</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1035"/>
        <source>Error writing to config.txt on FAT partition</source>
        <translation>FAT 파티션에 config.txt 쓰던 중 오류 발생</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1100"/>
        <source>Error creating user-data cloudinit file on FAT partition</source>
        <translation>FAT 파티션에 사용자 데이터 cloudinit 파일을 만드는 중 오류 발생</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1114"/>
        <source>Error creating network-config cloudinit file on FAT partition</source>
        <translation>FAT 파티션에 네트워크 구성 cloudinit 파일을 생성하는 중 오류 발생</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1137"/>
        <source>Error writing to cmdline.txt on FAT partition</source>
        <translation>FAT 파티션에 cmdline.txt 쓰던 중 오류 발생</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="431"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>디스크에 파일을 쓰는 동안 액세스 거부 오류가 발생했습니다.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="436"/>
        <source>Controlled Folder Access seems to be enabled. Please add both rpi-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>제어된 폴더 액세스가 설정된 것 같습니다. rpi-imager.exe 및 fat32format.exe를 허용된 앱 리스트에서 추가하고 다시 시도하십시오.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="442"/>
        <source>Error writing file to disk</source>
        <translation>디스크에 파일 쓰기 오류</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="461"/>
        <source>Error downloading: %1</source>
        <translation>다운로드 중 오류: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="684"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>저장소에 쓰는 중 오류 발생(flushing..)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="691"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>스토리지에 쓰는 중 오류 발생(fsync..)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="672"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>다운로드가 손상되었습니다. 해시가 일치하지 않습니다.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="114"/>
        <source>opening drive</source>
        <translation>드라이브 열기</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="299"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>SD card의 마지막 부분을 비워내는 동안 오류가 발생했습니다.&lt;br&gt;카드가 잘못된 용량을 표기하고 있을 수 있습니다(위조 품목).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="388"/>
        <source>starting download</source>
        <translation>다운로드 시작</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="717"/>
        <source>Error writing first block (partition table)</source>
        <translation>첫 번째 블록을 쓰는 중 오류 발생 (파티션 테이블)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="796"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>쓰기를 확인하지 못했습니다. SD카드 내용과 쓰인 내용이 다릅니다.</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>분할 오류: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>시작 오류 fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>실행 중 오류 fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>새 드라이브 문자 확인 오류</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>유효하지 않는 디바이스: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>포맷 오류 (udisks2 통해)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>시작 오류 sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation>FAT partition %1을 분할하여 생성하지 못했습니다.</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>시작 오류 mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>실행 오류 mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>이 플랫폼에 대해 포맷이 구현되지 않았습니다.</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="256"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>저장소 공간이 충분하지 않습니다.&lt;br&gt;최소 %1 GB 이상이어야 합니다.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="262"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>입력 파일이 올바른 디스크 이미지가 아닙니다.&lt;br&gt;파일사이즈 %1 바이트가 512바이트의 배수가 아닙니다.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="444"/>
        <source>Downloading and writing image</source>
        <translation>이미지 다운로드 및 쓰기</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="577"/>
        <source>Select image</source>
        <translation>이미지 선택하기</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="975"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>와이파이 비밀번호를 미리 입력하시겠습니까?</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>이미지 파일 열기</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>이미지 파일 열기 오류</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="97"/>
        <source>NO</source>
        <translation>아니요</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="110"/>
        <source>YES</source>
        <translation>예</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="123"/>
        <source>CONTINUE</source>
        <translation>계속</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="135"/>
        <source>QUIT</source>
        <translation>나가기</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="78"/>
        <source>Advanced options</source>
        <translation>고급 옵션</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="95"/>
        <source>Image customization options</source>
        <translation>이미지 사용자 정의 옵션</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="103"/>
        <source>for this session only</source>
        <translation>이 세션에 한하여</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="104"/>
        <source>to always use</source>
        <translation>항상 사용</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="117"/>
        <source>Disable overscan</source>
        <translation>overscan 사용 안 함</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="122"/>
        <source>Set hostname:</source>
        <translation>hostname 설정:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="141"/>
        <source>Enable SSH</source>
        <translation>SSH 사용</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="160"/>
        <source>Use password authentication</source>
        <translation>비밀번호 인증 사용</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="170"/>
        <source>Allow public-key authentication only</source>
        <translation>인증된 공개 키만 허용</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="185"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>&apos;%1&apos; authorized_keys 설정:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="258"/>
        <source>Configure wifi</source>
        <translation>wifi 설정</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="277"/>
        <source>SSID:</source>
        <translation>SSID:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="231"/>
        <location filename="../OptionsPopup.qml" line="297"/>
        <source>Password:</source>
        <translation>비밀번호:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="197"/>
        <source>Set username and password</source>
        <translation>사용자 이름 및 비밀번호 설정</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="216"/>
        <source>Username:</source>
        <translation>사용자 이름:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="292"/>
        <source>Hidden SSID</source>
        <translation>숨겨진 SSID</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="313"/>
        <source>Show password</source>
        <translation>비밀번호 표시</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="318"/>
        <source>Wifi country:</source>
        <translation>Wifi 국가:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="329"/>
        <source>Set locale settings</source>
        <translation>로케일 설정 지정</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="339"/>
        <source>Time zone:</source>
        <translation>타임존:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="349"/>
        <source>Keyboard layout:</source>
        <translation>키보드 레이아웃:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="359"/>
        <source>Skip first-run wizard</source>
        <translation>초기 실행 마법사 건너뛰기</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="366"/>
        <source>Persistent settings</source>
        <translation>영구적으로 설정</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="374"/>
        <source>Play sound when finished</source>
        <translation>완료되면 소리 재생</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="378"/>
        <source>Eject media when finished</source>
        <translation>완료되면 미디어 꺼내기</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="382"/>
        <source>Enable telemetry</source>
        <translation>원격 측정 사용</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="395"/>
        <source>SAVE</source>
        <translation>저장</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="111"/>
        <source>Internal SD card reader</source>
        <translation>내장 SD 카드 리더기</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="71"/>
        <source>Warning: advanced settings set</source>
        <translation>경고: 고급 설정이 설정됨</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="85"/>
        <source>Would you like to apply the image customization settings saved earlier?</source>
        <translation>이전에 저장한 이미지 사용자 지정 설정을 적용하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="94"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>아니요, 설정 지우기</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="106"/>
        <source>YES</source>
        <translation>예</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="118"/>
        <source>EDIT SETTINGS</source>
        <translation>EDIT SETTINGS</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="23"/>
        <source>Raspberry Pi Imager v%1</source>
        <translation>Raspberry Pi Imager v%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="98"/>
        <location filename="../main.qml" line="422"/>
        <source>Operating System</source>
        <translation>운영체제</translation>
    </message>
    <message>
        <location filename="../main.qml" line="110"/>
        <source>CHOOSE OS</source>
        <translation>운영체제 OS 선택</translation>
    </message>
    <message>
        <location filename="../main.qml" line="125"/>
        <source>Select this button to change the operating system</source>
        <translation>운영 체제를 변경하려면 이 버튼을 선택합니다.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="138"/>
        <location filename="../main.qml" line="718"/>
        <source>Storage</source>
        <translation>저장소</translation>
    </message>
    <message>
        <location filename="../main.qml" line="150"/>
        <location filename="../main.qml" line="1038"/>
        <source>CHOOSE STORAGE</source>
        <translation>저장소 선택</translation>
    </message>
    <message>
        <location filename="../main.qml" line="180"/>
        <source>WRITE</source>
        <translation>쓰기</translation>
    </message>
    <message>
        <location filename="../main.qml" line="185"/>
        <source>Select this button to start writing the image</source>
        <translation>이미지 쓰기를 시작하려면 버튼을 선택합니다.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="230"/>
        <source>CANCEL WRITE</source>
        <translation>쓰기 취소</translation>
    </message>
    <message>
        <location filename="../main.qml" line="233"/>
        <location filename="../main.qml" line="968"/>
        <source>Cancelling...</source>
        <translation>취소 하는 중...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="245"/>
        <source>CANCEL VERIFY</source>
        <translation>확인 취소</translation>
    </message>
    <message>
        <location filename="../main.qml" line="248"/>
        <location filename="../main.qml" line="991"/>
        <location filename="../main.qml" line="1057"/>
        <source>Finalizing...</source>
        <translation>마무리 중...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="268"/>
        <source>Select this button to access advanced settings</source>
        <translation>고급 설정에 액세스하려면 버튼을 선택합니다.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="284"/>
        <source>Using custom repository: %1</source>
        <translation>사용자 지정 리포지토리 사용: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="293"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</translation>
    </message>
    <message>
        <location filename="../main.qml" line="313"/>
        <source>Language: </source>
        <translation>언어: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="336"/>
        <source>Keyboard: </source>
        <translation>키보드: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="524"/>
        <location filename="../main.qml" line="1025"/>
        <source>Erase</source>
        <translation>삭제</translation>
    </message>
    <message>
        <location filename="../main.qml" line="525"/>
        <source>Format card as FAT32</source>
        <translation>FAT32로 카드 형식 지정</translation>
    </message>
    <message>
        <location filename="../main.qml" line="534"/>
        <source>Use custom</source>
        <translation>사용자 정의 사용</translation>
    </message>
    <message>
        <location filename="../main.qml" line="535"/>
        <source>Select a custom .img from your computer</source>
        <translation>컴퓨터에서 사용자 지정 .img를 선택합니다.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="482"/>
        <source>Back</source>
        <translation>뒤로 가기</translation>
    </message>
    <message>
        <location filename="../main.qml" line="163"/>
        <source>Select this button to change the destination storage device</source>
        <translation>저장 디바이스를 변경하려면 버튼을 선택합니다.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="483"/>
        <source>Go back to main menu</source>
        <translation>기본 메뉴로 돌아가기</translation>
    </message>
    <message>
        <location filename="../main.qml" line="600"/>
        <source>Released: %1</source>
        <translation>릴리즈: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="603"/>
        <source>Cached on your computer</source>
        <translation>컴퓨터에 캐시됨</translation>
    </message>
    <message>
        <location filename="../main.qml" line="605"/>
        <source>Local file</source>
        <translation>로컬 파일</translation>
    </message>
    <message>
        <location filename="../main.qml" line="607"/>
        <source>Online - %1 GB download</source>
        <translation>온라인 - %1 GB 다운로드</translation>
    </message>
    <message>
        <location filename="../main.qml" line="769"/>
        <location filename="../main.qml" line="821"/>
        <location filename="../main.qml" line="827"/>
        <source>Mounted as %1</source>
        <translation>%1로 마운트</translation>
    </message>
    <message>
        <location filename="../main.qml" line="823"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[쓰기 보호됨]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="865"/>
        <source>Are you sure you want to quit?</source>
        <translation>정말 그만두시겠습니까?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="866"/>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Raspberry Pi Imager가 사용 중입니다.&lt;br&gt;정말 그만두시겠습니까?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="877"/>
        <source>Warning</source>
        <translation>주의</translation>
    </message>
    <message>
        <location filename="../main.qml" line="885"/>
        <source>Preparing to write...</source>
        <translation>쓰기 준비 중...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="909"/>
        <source>Update available</source>
        <translation>업데이트 가능</translation>
    </message>
    <message>
        <location filename="../main.qml" line="910"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>이미저의 최신 버전을 사용할 수 있습니다.&lt;br&gt;다운받기 위해 웹사이트를 방문하시겠습니까??</translation>
    </message>
    <message>
        <location filename="../main.qml" line="971"/>
        <source>Writing... %1%</source>
        <translation>쓰는 중... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="898"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>&apos;%1&apos;에 존재하는 모든 데이터가 지워집니다.&lt;br&gt;계속하시겠습니까?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="950"/>
        <source>Error downloading OS list from Internet</source>
        <translation>인터넷에서 OS 목록을 다운로드하는 중 오류 발생</translation>
    </message>
    <message>
        <location filename="../main.qml" line="994"/>
        <source>Verifying... %1%</source>
        <translation>확인 중... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1001"/>
        <source>Preparing to write... (%1)</source>
        <translation>쓰기 준비 중... (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1017"/>
        <source>Error</source>
        <translation>오료</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1024"/>
        <source>Write Successful</source>
        <translation>쓰기 완료</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1026"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; 가 지워졌습니다.&lt;br&gt;&lt;br&gt;이제 SD card를 제거할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1028"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; 가 쓰여졌습니다. 위치 : &lt;b&gt;%2&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1030"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; 가 쓰여졌습니다. 위치 : &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;이제 SD card를 제거할 수 있습니다.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1096"/>
        <source>Error parsing os_list.json</source>
        <translation>구문 분석 오류 os_list.json</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1250"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>먼저 이미지가 들어 있는 USB를 연결합니다.&lt;br&gt;이미지는 USB 루트 폴더에 있어야 합니다.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1266"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>쓰기 금지된 SD card&lt;br&gt;카드 왼쪽에 있는 잠금 스위치를 위쪽으로 누른 후 다시 시도하십시오.</translation>
    </message>
</context>
</TS>
