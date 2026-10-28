# PLACEHOLDERS: izmišljene vrednosti za popunjavanje

Sve vrednosti ispod su **izmišljene** i treba ih zameniti pravim podacima klijenta. U HTML-u su obeležene atributom `data-placeholder="true"` (pretraga: `data-placeholder`).

Naziv projekta, lokacija, vrsta usluge i brend opreme dolaze iz zadatka i nisu izmišljeni, ali ih klijent treba potvrditi.

## Zbirne brojke (hero stranice /reference/)

| Polje | Izmišljena vrednost | Mesto na stranici |
|---|---|---|
| Okruga u kojima smo radili | 11 | Hero, treća brojka |
| Godina iskustva, završenih projekata | 26, 64+ | Hero (preuzeto sa starog sajta, proveriti) |

## Reference (`/reference/`): istaknuti projekti iz upitnika klijenta

Izmišljenih pet projekata je zamenjeno sa 9 stvarnih iz upitnika („Simon upitnik-projekti“): Hotel Sanjar, Rauch Serbia, Farmaceutska kuća Vega, Dom zdravlja Valjevo, Gradska kuća, Dom zdravlja Ub, Štamparija Crveno, Kazneno-popravni zavod Valjevo i Hotel Crni Vrh. Hram Svetog Save (projekat 05 u upitniku) nije na ovoj stranici, jer upitnik traži da se svetinje ne upisuju ovde (one su na stranici „Čuvari tradicije“).

**Iz upitnika (potvrđeno):** naziv, mesto, godina, tip objekta, usluge, površina, oprema, trajanje radova i obim posla.

**Napisano mi (polja koja su u upitniku bila prazna):** tekstovi „Izazov“ i „Rešenje“ (izvedeni samo iz podataka iz upitnika, bez izmišljenih brojki). „Rezultat“ prikazuje samo potvrđene brojke (površina, trajanje, godina). Izjave klijenata nisu objavljene, jer nijedna nije data. Investitori se ne navode (upitnik ne kaže da li smemo).

**Fotografije su privremene** (ilustrativne, iz postojećih Unsplash fotografija) i označene su „Ilustrativna fotografija“. Zameniti ih fotografijama klijenta (`assets/projekti/<naziv>/01–04.webp`, kod u `reference/index.html`).

**Stvarne fotografije projekata (poslao klijent):** Rauch Serbia (`assets/projekti/rauch-serbia/01.webp`), Farmaceutska kuća Vega (`assets/projekti/vega-farmaceutska/01.webp`), Dom zdravlja Valjevo (`assets/projekti/dom-zdravlja-valjevo/01.webp`, Full HD), Gradska kuća (`assets/projekti/gradska-kuca/01.webp`), Dom zdravlja Ub (`assets/projekti/dom-zdravlja-ub/01.webp`), Štamparija Crveno (`assets/projekti/stamparija-crveno/01.webp`, mala, 680 px), Kazneno-popravni zavod Valjevo (`assets/projekti/kpz-valjevo/01.webp`), Hotel Crni Vrh (`assets/projekti/hotel-crni-vrh/01.webp`; na originalu piše vodeni žig „© Bajić Vladimir“, u kadru je sakriven, proveriti ima li pravo objave). Ostali projekti i dalje imaju privremene fotografije.

**Privremeni logotipi opreme:** za Farmaceutsku kuću Vega (Viessmann), Dom zdravlja Valjevo (Toshiba), Gradsku kuću (Carrier) i Dom zdravlja Ub (Viessmann) stavljeni su logotipi koji **nisu povezani sa projektom**, samo kao privremeni, dok klijent ne potvrdi partnere (oznaka `data-placeholder` na slici). Zameniti pre objave. Galerija je uklonjena sa projekata (ostaje samo glavna fotografija).

**Treba potvrditi sa klijentom:**

- godine u upitniku se razlikuju od referent liste: Hotel Sanjar (2022 / 2023), Rauch Serbia (2022 / 2023), Gradska kuća (2025 / 2018), KPZ Valjevo (2015 / 2012). Na sajtu su godine iz upitnika
- Hram Svetog Save u upitniku: 3.200 m² (a u nazivu „preko 5000 m²“); na sajtu stoji 5.000+ m²
- da li smemo navesti investitore (GP Kej, Sport Agent, Crveno d.o.o.)
- Koceljeva je u upitniku bez okruga; uneto kao Mačvanski okrug

## Landing page: ilustrativni podaci (nisu deo ove stranice, ali treba ih zameniti)

| Polje | Izmišljena vrednost | Mesto |
|---|---|---|
| Broj projekata po usluzi | Grejanje 26, Hlađenje 12, Solarni 10, Ventilacija 14, Klimatizacija 16, Sprinkleri 11 | Značke u uglu kartica usluga |
| Projekti u popupu mape | 20 u Beogradu, 8 u Kolubarskom okrugu, 6 na Kosovu i Metohiji, sa površinama, opisima i opremom (svetinje su označene kao donacija) | Popup nakon klika na okrug |
| Okruzi označeni na mapi | Kolubarski, Beogradski, Kosovo i Metohija | Mapa u sekciji Reference |
| Cene u brzoj proceni | 96 / 56 / 40 € po m², dodaci 24 / 20 / 16 € po m², korekcija 124% za adaptaciju | Konfigurator |
| Brojke „64+“ i „16+“ | preuzete sa starog sajta | Sekcija „O nama“ |

**Ažurirano: popup mape (landing page) sada koristi referent listu klijenta** (Prilog 2, 30.09.2023.): 62 objekta u Kolubarskom okrugu, 8 u Beogradskom, po jedan u Mačvanskom, Zaječarskom i Zlatiborskom, a crkve i manastiri u Raškom, Pećkom i Prizrenskom okrugu. Izmišljene stavke su uklonjene. Okruzi se boje prema podacima (narandžasto: izvedeni radovi, zlatno: samo crkve i manastiri). Podaci su u JS bloku „mapa: nazivi okruga, tooltip i popup“ u `index.html`.

Fotografije u popupu su **ilustrativne** (po vrsti objekta, iz postojećih Unsplash fotografija) i označene su na stranici kao „Ilustrativna fotografija“. Zameniti ih fotografijama klijenta.

**Treba potvrditi sa klijentom:**

- objekti bez mesta u listi (kuće „Publik“, „Urban Tehnik“, kuća prof. Lazića i „Poliform“): vlasnik sajta je potvrdio da su u Valjevu, uneti su u popup. Imena privatnih lica (M. Kraljević, prof. Lazić) nisu objavljena na sajtu
- datum završetka za 11 poslednjih stavki u listi (nemaju datum, prikazuju se bez godine)
- „Zdravstveni centar, Stomatologija“ (bez mesta u listi, uneto kao Valjevo) i Pantićeva 122 (uneto kao Valjevo)
- manastiri bez mesta u listi: lokacija je određena po znanju (Lelić, Pustinja, Ćelije, Ždrebaonik: Valjevo; Studenica: Kraljevo; Sopoćani: Novi Pazar). Tušimlja, Preradovac, Piperska ćelija nisu na mapi (nepoznato mesto). Hilandar, Ostrog i Mojkovac su van Srbije, pa nisu na mapi
- površina Hrama Vaskrsenja u Valjevu: lista navodi 1.300 m², stranica „Čuvari tradicije“ 1.200 m²

### Fotografije u popupu mape (stvarni objekti)

Za 12 objekata u popupu su stvarne fotografije sa Wikimedia Commons (preuzete 720 px, u `assets/reference/`). Popup ih ne označava kao „ilustrativne“. Autori i licence su zapisani ovde, jer **licence CC BY-SA / CC BY zahtevaju navođenje autora** (ne može da se ukine dozvolom klijenta, jer klijent nije autor fotografije). Ako se autori ne navode na sajtu, ove fotografije treba zameniti ili dodati stranicu/sekciju „Izvori fotografija“.

| Fajl | Autor | Licenca | Izvor |
|---|---|---|---|
| `assets/reference/studenica.jpg` | Pudelek | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Manastir_Studenica_(by_Pudelek).JPG |
| `assets/reference/sopocani.jpg` | Pudelek (Marcin Szala) | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Manastir_Sopo%C4%87ani_(by_Pudelek).jpg |
| `assets/reference/decani.jpg` | Julian Nyča | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Visoki_De%C4%8Dani,_exterior_view_(Julian_Ny%C4%8Da).jpg |
| `assets/reference/lelic.jpg` | Mickey Mystique | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Manastir_Leli%C4%87,_Valjevo,_015.jpg |
| `assets/reference/celije.jpg` | Mickey Mystique | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Manastir_%C4%86elije,_Valjevo,_002.jpg |
| `assets/reference/pustinja.jpg` | Vladimir Pecikoza | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Medvednik_-_zapadna_Srbija_-_selo_Vujinova%C4%8Da_-_manastir_Pustinja.jpg |
| `assets/reference/zdrebaonik.jpg` | ? | CC BY 3.0 rs | https://commons.wikimedia.org/wiki/File:%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80_%D0%96%D0%B4%D1%80%D0%B5%D0%B1%D0%B0%D0%BE%D0%BD%D0%B8%D0%BA.jpg |
| `assets/reference/pokrova.jpg` | Nenad Sakovic | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Crkva_Pokrova_Presvete_Bogorodice_Valjevo_-_panoramio.jpg |
| `assets/reference/bogoslovija.jpg` | VisarHaxhifazliu | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Bogoslovija_2.jpg |
| `assets/reference/osnovni-sud.jpg` | Dungodung | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Valjevo,_Osnovni_sud,_02.jpg |
| `assets/reference/gimnazija-knjazevac.jpg` | ImperatorkA | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Gimnazija_u_Knja%C5%BEevcu.JPG |
| `assets/reference/nektarije.jpg` | Društvo za akademski razvoj | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Hram_Svetog_Nektarija_u_Valjevu.jpg |

## Fotografije

Sve fotografije su besplatne sa [Unsplash](https://unsplash.com) (Unsplash licenca dozvoljava komercijalnu upotrebu). One su **ilustrativne** i ne prikazuju stvarne Simon projekte. Treba ih zameniti klijentovim fotografijama. Fotografije sakralnog objekta su opšte (zapadnoevropske) crkve, ne srpski manastir, pa ih svakako treba zameniti.

| Projekat | Fajl | Autor (prema Unsplash linku) | Izvor |
|---|---|---|---|
| kuca-valjevo | `assets/projekti/kuca-valjevo/01.webp` | Alpha Innotec | https://unsplash.com/photos/kblddocwPa0 |
| kuca-valjevo | `assets/projekti/kuca-valjevo/02.webp` | Alpha Innotec | https://unsplash.com/photos/4VCm8l6wLQY |
| kuca-valjevo | `assets/projekti/kuca-valjevo/03.webp` | E24 | https://unsplash.com/photos/N6KVqGA44ZI |
| kuca-valjevo | `assets/projekti/kuca-valjevo/04.webp` | Alpha Innotec | https://unsplash.com/photos/TDtycnfiDa8 |
| kuca-valjevo | `assets/projekti/kuca-valjevo/thumb.webp` | isto kao 01.webp (isečak) | |
| pogon-sabac | `assets/projekti/pogon-sabac/01.webp` | Arno Senoner | https://unsplash.com/photos/H7rBLuD85Tg |
| pogon-sabac | `assets/projekti/pogon-sabac/02.webp` | Arno Senoner | https://unsplash.com/photos/bCgsKqFzUcg |
| pogon-sabac | `assets/projekti/pogon-sabac/03.webp` | Alpha Innotec | https://unsplash.com/photos/thIufsr8kwg |
| pogon-sabac | `assets/projekti/pogon-sabac/04.webp` | Arno Senoner | https://unsplash.com/photos/IvnWhkmpKvk |
| pogon-sabac | `assets/projekti/pogon-sabac/thumb.webp` | isto kao 01.webp (isečak) | |
| hotel-zlatibor | `assets/projekti/hotel-zlatibor/01.webp` | Toa Heftiba | https://unsplash.com/photos/2GMervuSEs4 |
| hotel-zlatibor | `assets/projekti/hotel-zlatibor/02.webp` | Vivint Solar | https://unsplash.com/photos/9CalgkSRZb8 |
| hotel-zlatibor | `assets/projekti/hotel-zlatibor/03.webp` | Virtue Solar | https://unsplash.com/photos/1hCj-VhKYWE |
| hotel-zlatibor | `assets/projekti/hotel-zlatibor/04.webp` | Frames For Your Heart | https://unsplash.com/photos/zSG-kd-L6vw |
| hotel-zlatibor | `assets/projekti/hotel-zlatibor/thumb.webp` | isto kao 01.webp (isečak) | |
| skola-kolubarski | `assets/projekti/skola-kolubarski/01.webp` | Ivan Aleksic | https://unsplash.com/photos/PDRFeeDniCk |
| skola-kolubarski | `assets/projekti/skola-kolubarski/02.webp` | 2Y Kang | https://unsplash.com/photos/dFohf_GUZJ0 |
| skola-kolubarski | `assets/projekti/skola-kolubarski/03.webp` | Yanping Ma | https://unsplash.com/photos/bnvjZP-Xffs |
| skola-kolubarski | `assets/projekti/skola-kolubarski/04.webp` | Feliphe Schiarolli | https://unsplash.com/photos/hes6nUC1MVc |
| skola-kolubarski | `assets/projekti/skola-kolubarski/thumb.webp` | isto kao 01.webp (isečak) | |
| poslovni-beograd | `assets/projekti/poslovni-beograd/01.webp` | Sasha Pleshco | https://unsplash.com/photos/nBRHY7YZ3M0 |
| poslovni-beograd | `assets/projekti/poslovni-beograd/02.webp` | Kaleb Tapp | https://unsplash.com/photos/1deQbU6DhBg |
| poslovni-beograd | `assets/projekti/poslovni-beograd/03.webp` | Kettenreaktion | https://unsplash.com/photos/l_Vn4HlFQVw |
| poslovni-beograd | `assets/projekti/poslovni-beograd/04.webp` | Arlington Research | https://unsplash.com/photos/kN_kViDchA0 |
| poslovni-beograd | `assets/projekti/poslovni-beograd/thumb.webp` | isto kao 01.webp (isečak) | |

Logotipi partnera (`assets/partneri/`) su originalni, dobijeni od klijenta, koji ima pravo njihovog korišćenja.

## Čuvari tradicije (`/cuvari-tradicije/`)

Sve što NIJE na listi potvrđenih činjenica označeno je u HTML-u sa `data-placeholder="true"`. Svi radovi na svetinjama su **donacija**, to je potvrđeno i stoji kao jasna poruka na stranici.

| Polje | Privremena vrednost | Mesto na stranici |
|---|---|---|
| Reč osnivača (ceo citat) | Nismo ovo radili kao posao. Sve što smo uradili za svetinje, uradili smo kao dar… (napisano na osnovu motiva ktitora) | Sekcija „Reč osnivača“, tamna traka |
| Potpis uz citat | Osnivač firme (bez imena) | Ispod citata |
| Ukupan broj svetinja | 40+ („svetinja ukupno, sve kao donacija“) | Brojke, četvrta stavka |
| Obim radova na Hilandaru | Izveli smo radove na instalacijama grejanja u obnovljenim objektima manastira. | Izdvojene svetinje, Hilandar |
| Lista zadužbina Nemanjića | 6 praznih stavki „Naziv zadužbine 1–6“ | Izdvojene svetinje, zbirni blok |
| Odnos Zorana Petrovića sa firmom | u tekstu piše „zadužbina porodice Petrović“ (označeno) | Crkva u Osečini, prvi pasus |
| Fotografije sa osvećenja temelja i gradnje | tri privremene fotografije (Unsplash) | Crkva u Osečini, „Osvećenje temelja“ |
| Fotografija mesta gradnje | privremena fotografija doline | Crkva u Osečini, desno od priče |
| Objekti na Kosovu i Metohiji | 3 prazne stavke „Naziv objekta 1–3“ | Sekcija Kosovo i Metohija |
| Svedočanstva sveštenstva | 2 izmišljena skromna teksta sa oznakom „(primer)“ | Sekcija „Reči zahvalnosti“ |

**Potvrđeno (nije placeholder):** ime firme i monaško ime Svetog Stefana Prvovenčanog; osnivač je otac sadašnjeg vlasnika; osnovano pre više od četvrt veka; Hram Svetog Save (celokupno podno grejanje, preko 5.000 m²); Hram Vaskrsenja Hristovog u Valjevu (preko 1.200 m² podnog grejanja); Hilandar (obnova nakon požara 2004, jedna od najvećih donacija); skoro sve zadužbine Nemanjića; radovi širom Srbije, na Kosovu i Metohiji i u Beogradu; sve je donacija; svi podaci o crkvi u Osečini (ktitor Zoran Petrović, posveta, mesto, episkop Isihije, arhitektica Milka Krstivojević, dimenzije, vremenska kapsula, freskopis, motiv ktitora).

**Ažurirano podacima klijenta (referent lista, 30.09.2023.):** dodata je sekcija „Manastiri i hramovi u kojima smo radili“ (`#manastiri`) sa kompletnim spiskom; popunjene su liste „Zadužbine Nemanjića“ (Hilandar, Studenica, Sopoćani, Visoki Dečani) i „Kosovo i Metohija“ (Visoki Dečani, Prizrenska bogoslovija, Dečanska vinarija); brojka „40+“ je zamenjena sa „20+“ jer lista ima 22 svetinje. Mapa ima i Raški okrug (Studenica, Sopoćani).

**Treba potvrditi:** lista kaže da je „u velikom delu“ donirano, a stranica na drugim mestima tvrdi da je sve donacija. Hram Vaskrsenja: lista 1.300 m², stranica 1.200 m². Za manastire na listi (Tušimlja, Preradovac, Piperska ćelija…) nema mesta, pa su navedeni bez lokacije. Obim radova na Hilandaru i dalje čeka potvrdu.

### Fotografije (Čuvari tradicije)

Sve su privremene dok klijent ne pošalje sopstvene. Atribucija autora je uklonjena sa stranice radi dizajna. Fotografije sa Wikimedia Commons (CC BY-SA 4.0) zahtevaju navođenje autora, pa ih treba zameniti sopstvenim fotografijama pre objave, ili vratiti atribuciju. Spisak autora je u tabeli ispod.

| Fajl | Autor | Licenca | Izvor |
|---|---|---|---|
| `assets/tradicija/hero-hilandar.webp` | Sreten Vuković | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | https://commons.wikimedia.org/wiki/File:Hilandar_24.jpg |
| `assets/tradicija/hilandar.webp` | Sreten Vuković | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | https://commons.wikimedia.org/wiki/File:Hilandar_19.jpg |
| `assets/tradicija/hram-svetog-save.webp` | kallerna | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | https://commons.wikimedia.org/wiki/File:Church_of_Saint_Sava_4.jpg |
| `assets/tradicija/hram-svetog-save-enterijer.webp` | DKjellby | [CC0](https://creativecommons.org/publicdomain/zero/1.0/) | https://commons.wikimedia.org/wiki/File:Church_of_Saint_Sava,_Belgrade_(4).jpg |
| `assets/tradicija/hram-valjevo.webp` | Nikolina Šepić | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | https://commons.wikimedia.org/wiki/File:Saborna_crkva_u_Valjevu_02.jpg |
| `assets/tradicija/fresko1.webp` | Lorenzo Turroni | Unsplash licenca | https://unsplash.com/photos/d_xruvlLGjA (nije korišćena na stranici) |
| `assets/tradicija/fresko2.webp` | Kristijan Arsov | Unsplash licenca | https://unsplash.com/photos/VuCw5GjkUrA |
| `assets/tradicija/svece.webp` | Matt Seymour | Unsplash licenca | https://unsplash.com/photos/pujZSwLi_7c |
| `assets/tradicija/kamen.webp` | Yvonne Assen | Unsplash licenca | https://unsplash.com/photos/bdA0TtmbeVI |
| `assets/tradicija/temelj.webp` | Tr Ng Tuy T Ly | Unsplash licenca | https://unsplash.com/photos/B9chJyEzO0Q |
| `assets/tradicija/dolina.webp` | Soham Banerjee | Unsplash licenca | https://unsplash.com/photos/vegEZ8GphSM |

### Šta treba tražiti od klijenta

- potvrda ili korekcija citata osnivača i ime osnivača za potpis
- odnos Zorana Petrovića sa firmom (osnivač? član porodice?)
- trenutni status gradnje crkve u Osečini (stranica je pisana u vremenu „u izgradnji“; godina osvećenja temelja je 2026.)
- fotografije sa osvećenja temelja i sa gradnje, uz dozvolu za objavu
- lista zadužbina Nemanjića u kojima je firma radila
- obim radova na Hilandaru
- objekti na Kosovu i Metohiji (nazivi i, ako može, fotografije)
- svedočanstva sveštenstva ili bratstava (stvarni tekstovi i dozvola za objavu)
- sopstvene fotografije objekata, sa dozvolom za objavu i, gde treba, saglasnošću manastira
- ukupan broj svetinja u kojima je firma radila
- dozvola Zavoda za zaštitu spomenika kulture i saglasnost manastira ako se pominju konkretni projekti (preporuka)

### Napomena za održavanje

Blok „Crkva Svetog Simeona Stolpnika, Osečina“ treba ažurirati kako gradnja napreduje (status, nove fotografije, godina osvećenja).

## Stručno savetovanje (`/strucno-savetovanje/`)

Izmišljene vrednosti su u HTML-u označene sa `data-placeholder="true"`.

**Ažurirano podacima klijenta (dokument „Simon strucno savetovanje-podaci“):** rok za odgovor je 48 h radnim danima, prvo savetovanje i obilazak su besplatni, ponuda stiže pismeno (PDF, e-mail) do 7 dana od obilaska, regioni i FAQ odgovori su uneti, subvencije su zamenjene tekstom o kreditima/GEFF programu, servis tuđih sistema je izbačen, e-mail je simonvaljevo@gmail.com, radno vreme Pon–Pet 08–16, Sub 08–12, a usluge u formularu imaju dva solarna tipa. **Još otvoreno:** pitanje o budžetu (klijent nije siguran), Web3Forms ključ, pravni tekst Politike privatnosti (pregled pravnika), prilozi (Pro paket ili `ATTACHMENTS_ENABLED=false`).


| Polje | Privremena vrednost | Mesto na stranici |
|---|---|---|
| Ograničenja priloga | najviše 5 fajlova, 5 MB po fajlu, 15 MB ukupno; formati PDF, JPG, JPEG, PNG, HEIC, DWG, DXF. Web3Forms dokumentacija navodi samo 5 MB po fajlu (Pro). Ukupna veličina, broj fajlova i dozvoljeni tipovi nisu dokumentovani, pa ih treba proveriti pravim Pro ključem | Konstanta `LIMITS` u `assets/js/forms.js` (zajednička za oba formulara); formati su u skripti stranice |
| Rok za odgovor | 24 h radnim danima | Hero (stavka poverenja), „Šta se dešava posle slanja“, poruka uspeha |
| Okvirni budžet (opsezi) | Do 3.000 € (ili Do 5.000 € ako je željeni sistem toplotna pumpa), 3.000 – 15.000 € (odnosno 5.000 – 15.000 €), 15.000 – 40.000 €, preko 40.000 €. Polje „Okrug“ je uklonjeno iz koraka 2 | Formular, korak 2 |
| Odgovori u „Čestim pitanjima“ | svih šest odgovora su izmišljeni (besplatno prvo savetovanje, pokrivenost regiona, trajanje ponude, servis tuđih sistema, subvencije) | Sekcija „Česta pitanja“ |
| Pitanje o subvencijama | sakriveno atributom `hidden` dok klijent ne potvrdi da pomaže oko dokumentacije | Sekcija „Česta pitanja“, poslednje pitanje (ukloniti `hidden` iz `<details>`) |
| Politika privatnosti | kratak izmišljen tekst u dijalogu (nema posebne stranice) | Dijalog koji se otvara iz saglasnosti u koraku 3; potreban pravi tekst |
| Web3Forms ključ | `OVDE_KLJUC` | `WEB3FORMS_KEY` na vrhu `assets/js/forms.js` (jedan ključ za oba formulara; za karijeru po želji `WEB3FORMS_KEY_KARIJERA`) |

### Šta treba tražiti od klijenta

- da li je na broju +381 64 874 5419 aktivan Viber (stranica upućuje klijente na Viber)
- rok za odgovor na upit (sada: 24 h radnim danima)
- da li su prvo savetovanje i obilazak besplatni
- koje regione pokrivaju (odgovor u FAQ-u je izmišljen)
- da li pomažu oko subvencija (pitanje je sakriveno dok se ne potvrdi)
- e-mail na koji stižu upiti: sa njim se pravi besplatan Web3Forms ključ (web3forms.com) koji se upisuje u `WEB3FORMS_KEY`
- odluka o prilozima: Web3Forms Pro paket (plaćeno, godišnje) ili `ATTACHMENTS_ENABLED = false` u `assets/js/forms.js` (besplatno); važi za oba formulara
- tekst Politike privatnosti (u skladu sa Zakonom o zaštiti podataka o ličnosti)

## Karijera (landing page, formular za prijavu)

| Polje | Privremena vrednost | Mesto |
|---|---|---|
| Ključ za prijave | koristi se isti `WEB3FORMS_KEY` kao za upite (`WEB3FORMS_KEY_KARIJERA` je prazan) | `assets/js/forms.js` |
| CV | jedan fajl, PDF/DOC/DOCX, do 5 MB (Web3Forms dokumentacija navodi samo 5 MB po fajlu; tipove treba proveriti pravim Pro ključem). Obavezan je kad je `ATTACHMENTS_ENABLED = true` | Formular za karijeru |

### Šta treba tražiti od klijenta (karijera)

- na koji e-mail stižu prijave za posao (isti kao upiti ili drugi); ako je drugi, pravi se poseban Web3Forms ključ za `WEB3FORMS_KEY_KARIJERA`
- da li je CV obavezan (sada jeste kad su prilozi uključeni)
