# PG6301 48-timers eksamen 'Verdens Undergang'

[![.github/workflows/verify.yaml](https://github.com/kristiania-pg6301-2022/pgr6301-exam-Soleimsen/actions/workflows/verify.yaml/badge.svg?branch=main)](https://github.com/kristiania-pg6301-2022/pgr6301-exam-Soleimsen/actions/workflows/verify.yaml)

- [Heroku](https://pg6301-exam-d.herokuapp.com/)
- [GitGub Repository](https://github.com/kristiania-pg6301-2022/pgr6301-exam-Soleimsen)
- ***TEST RAPPORT LIGGER I "testrapport" mappen. Ettersom github actions la seg for å sove, så er rapporten tatt fra lokalt.***

## Egenutfylling av funksjonelle krav

- [x] Anonyme brukere kan kun se artiklene uten innhold, og kan ikke trykke seg inn på artiklene

- [ ] Når en ny sak publiseres, skal alle brukerne få se den nye saken umiddelbart. Bruk websockets for å sende oppdateringer

  - Fikk ikke tid til å gjøre Web Sockets

- [x] Brukere kan logge seg inn. Det anbefales at du implementerer at brukerne logger seg inn med Google, men andre
      mekanismer er også akseptabelt.

- [x] En bruker som er logget inn kan se på sin profilside (userinfo fra Google)

  - Brukere logget inn med Azure AD kan ikke se sitt profilbilde

- [x] Brukere skal forbli logget inn når de refresher websiden

- [x] En bruker som er logget inn kan klikke på en nyhetssak for å se detaljene om nyhetssaken. Detaljene skal inkludere en
      nyhetskategori, overskrift, tekst og navn på den som publiserte den

- [x] "Redaksjonelle brukere" kan logge seg inn med Active Directory. Det må fungere å logge seg inn med en Active Directory
      på skolens AD ( domain_hint=egms.no )

- [x] Redaksjonelle brukere kan publisere nye nyhetsartikler

- [x] Nyhetsartikkel skal inneholde en kategori valgt fra en nedtrekksliste ( <select> ), tittel ( <input> ) og tekst ( <textarea> )

- [ ] Dersom noen allerede har publisert en nyhetsartikkel med samme tittel skal serveren sende HTTP status kode 400 og en
      feilmelding - Ble ikke prioritert siden hver artikkel uansett har hver sin id, og fikk ikke tid.

- [x] Brukeren skal forhindres fra å sende inn en nyhetsartikkel som mangler kategori, tittel eller tekst

- [ ] En redaksjonell bruker skal kunne redigere en artikkel de selv har publisert

  - Denne har jeg kommet langt på, men rakk rett og slett ikke å gjøre ferdig, hilsen 6. Mai 04:33.
  - All koden ligger igjen, men per nå går det ikke an å sende den til serveren og både google og azure vil ha mulighet til å prøve å gjøre endringer.

- [x] Alle feil fra serves skal presenteres til bruker på en pen måte, med mulighet for brukeren til å prøve igjen

  - har prøvd, men det er nok noe som er glemt. 48 timer går fort!

- [x] Brukeren ser kun menyvalg som de har tilgang til

- [x] Brukere som går til en side de ikke har tilgang til blir bedt om å logge inn

  - har prøvd, men det er nok noe som er glemt. 48 timer går fort!

- [x] Brukere bør alltid se listen over artikler når de navigerer seg rundt på sidene

## Egenutfylling av tekniske krav

- [x] Oppsett av package.json, parcel, express, prettier
  - Usikker om prettier er satt opp slik det er forventet. Jeg har brukt pretty som extension i VSC som automatisk prettifier på save. Pretter er også installert i prosjektet.
- [x] React Router
  - React Router satt opp med både statiske og dynamiske routes. Hver nyhetsartikkel får sin egen route baser på id-en til artikkelen.
  - Eventuelle problemer for delvis uttelling er at Routes hovedsakelig ligger i App.jsx og ikke i sin helt egen fil. Det ligger Routes i Login.jsx også.
- [x] Express app
  - _beskriv eventuelle mangler eller problemer for delvis uttelling_
- [x] Kommunikasjon mellom frontend (React) og backend (Express)
  - Jeg sleit med å finne ut hvordan jeg kunne hente taggene fra backend slik at jeg kunne sortere nyhetsartikler etter tagg i frontend.
- [x] Deployment til Heroku

- [x] Bruk av MongoDB

- [x] OpenID Connect
  - Fant ikke ut hvordan jeg skulle få autorization til å hente profilbilde fra Azure AD.
- [x] Web Sockets
  - Fikk ikke dette til. Var gjort et lite forsøk, så kode ligger igjen i server. Prøvde å integrere det i Articles.jsx.
- [x] Jest med dokumentert testdekning

  - Lav testdekning. Sliter med å forstå tester og hvordan de fungerer. Mange tester kjørte grønt lokalt, men feilet på github actions. "fetch is not defined" dukket stadig opp.

- [x] Artikler skal lagres i MongoDB
