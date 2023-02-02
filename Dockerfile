FROM atools/chrome-headless:java11-node16-latest
#thease should only change when repo updates.
RUN apt-get update -y
#install chrome
RUN apt-get install -y google-chrome-stable
RUN google-chrome --version
#install firefox
RUN apt-get install -y firefox-esr
RUN firefox -v
##install edge optional
#RUN apt install software-properties-common apt-transport-https wget -y
#RUN wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | apt-key add -
#RUN add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" -y
#RUN apt update -y
#RUN apt-get install -y microsoft-edge-stable
#RUN microsoft-edge --version
#clone repository
#RUN git clone https://github.com/AZANIR/wdioTestActionsAsync.git
#RUN cp -R ./wdioTestActionsAsync/. ./
#local files
COPY ./ ./
RUN rm -rf ./node_modules
#these depend on files above, especialy package.json
RUN npm i npm@latest
RUN npm install

