# Sieci mobilne i komórkowe

## 1. Na czym polega idea telefonii komórkowej, na przykładzie sieci GSM?

Telefonia komórkowa opiera się na podziale obszaru geograficznego na mniejsze jednostki – komórki, z których każda obsługiwana jest przez stację bazową. Przykładem takiej technologii jest GSM (Global System for Mobile Communications), który pozwala na przekazywanie rozmów telefonicznych i danych poprzez połączenia radiowe między urządzeniami mobilnymi a stacjami bazowymi. System ten wykorzystuje technologię FDMA/TDMA do organizowania dostępnych zasobów radiowych.

## 2. Jakie metody wielodostępu są wykorzystywane w radiowej sieci dostępowej 2G (GSM)?

W sieciach 2G, takich jak GSM, stosuje się metody wielodostępu FDMA (Frequency Division Multiple Access) oraz TDMA (Time Division Multiple Access). FDMA dzieli dostępne pasmo na kanały częstotliwości, a TDMA dodatkowo dzieli te kanały na przedziały czasowe, co umożliwia obsługę wielu użytkowników jednocześnie na tym samym kanale.

## 3. Proszę powiedzieć, w jakim celu opracowano technologie GPRS i EDGE?

GPRS (General Packet Radio Service) i EDGE (Enhanced Data Rates for GSM Evolution) zostały opracowane w celu zwiększenia przepustowości sieci 2G GSM, umożliwiając szybszy transfer danych. GPRS wprowadza transmisję pakietową, a EDGE optymalizuje kodowanie modulacji, co zwiększa efektywność wykorzystania pasma i prędkości transmisji.

# Sieci rozległe

## 4. Podać przykłady protokołów rutingu klasy IGP (Interior Gateway Protocol) i opisać ich różnice.

Przykładami protokołów rutingu IGP są OSPF (Open Shortest Path First) oraz RIP (Routing Information Protocol). OSPF to protokół oparty na algorytmie stanu łącza, oferujący szybką konwergencję i skalowalność, natomiast RIP działa na zasadzie wektora odległości, gdzie trasy wybierane są na podstawie liczby przeskoków (hopów), ale ma ograniczoną skalowalność.

## 5. Jaki protokół rutingu pracuje w Internecie między systemami autonomicznymi? Proszę powiedzieć, co go różni od protokołu OSPF.

Protokół BGP (Border Gateway Protocol) jest stosowany do wymiany informacji o trasach między systemami autonomicznymi w Internecie. W odróżnieniu od OSPF, który jest używany wewnątrz jednego systemu autonomicznego, BGP opiera się na politykach rutingu, nie na metrykach, i jest skalowalny na poziomie globalnym.

## 6. Gdzie w sieci jest wykorzystywany protokół MPLS i podać, w jakim celu jest stosowany?

MPLS (Multiprotocol Label Switching) jest wykorzystywany w sieciach operatorskich w celu przyspieszenia przesyłania pakietów poprzez przypisanie im etykiet (labels), co pozwala na efektywne kierowanie ruchem sieciowym. Stosuje się go m.in. do realizacji VPN (Virtual Private Networks) oraz optymalizacji routingu w sieciach rozległych.

# Język Fortran 90/95

## 7. Podstawowe bloki konstrukcyjne Fortranu, komunikacja pomiędzy nimi.

Podstawowe bloki konstrukcyjne Fortranu to moduły, programy, podprogramy oraz funkcje. Komunikacja pomiędzy nimi odbywa się poprzez przekazywanie argumentów oraz korzystanie z modułów, które udostępniają zmienne i funkcje dla innych części programu.

## 8. Wskaźniki i dynamiczne struktury danych.

Fortran 90/95 umożliwia wykorzystanie wskaźników, które mogą wskazywać na dynamiczne struktury danych, takie jak tablice i zmienne alokowane w czasie wykonywania programu. Umożliwia to elastyczne zarządzanie pamięcią oraz tworzenie dynamicznych struktur, takich jak listy.

## 9. Przenoszalność (powtarzalność) złożonych obliczeń na różne maszyny, unikalność tych narzędzi w języku Fortran. Parametryzowane typy danych (zakres wartości, precyzja).

Fortran oferuje mechanizmy, takie jak parametryzowane typy danych, które pozwalają na kontrolowanie precyzji i zakresu obliczeń, co jest szczególnie ważne w przenoszeniu kodu między różnymi architekturami komputerowymi. Dzięki temu możliwe jest uzyskanie powtarzalnych wyników na różnych maszynach.

# Zaawansowane techniki programowania obiektowego w C++

## 10. Objaśnij działanie inteligentnych wskaźników na przykładzie unique_ptr oraz shared_ptr.

Inteligentne wskaźniki, takie jak `unique_ptr` oraz `shared_ptr`, służą do automatycznego zarządzania dynamicznie alokowaną pamięcią w C++. `unique_ptr` zapewnia wyłączny dostęp do zasobu, co oznacza, że jeden obiekt może posiadać zasób. `shared_ptr` umożliwia współdzielenie zasobu między wieloma wskaźnikami, przy czym zasób zostaje zwolniony dopiero, gdy ostatni wskaźnik zostanie zniszczony.

## 11. Klasy cech w programowaniu generycznym na przykładzie std::numeric_limits.

Klasy cech w C++ to specjalne struktury umożliwiające przechowywanie informacji o typach. Przykładem jest `std::numeric_limits`, który zawiera informacje o właściwościach liczbowych dla różnych typów, takich jak zakresy wartości czy precyzja.

## 12. Metaprogramowanie na przykładzie szablonu funkcji potęgowania całkowitego.

Metaprogramowanie w C++ pozwala na wykonywanie obliczeń na poziomie kompilacji. Przykładem jest szablon funkcji potęgowania całkowitego, który oblicza potęgę liczby w trakcie kompilacji, co prowadzi do optymalizacji kodu.

# Programowanie rozproszone i równoległe

## 13. Na czym polega użycie modelu fork-join w OpenMP?

Model fork-join w OpenMP polega na tym, że program rozpoczyna się jako jeden wątek, który na pewnym etapie może się rozdzielić (fork) na wiele wątków. Po wykonaniu równoległych operacji, wątki łączą się (join) w jeden główny wątek, co umożliwia synchronizację wyników.

## 14. Co to jest "namiastka"? Proszę o omówienie tego zagadnienia na podstawie technologii RMI.

Namiastka (ang. stub) w technologii RMI (Remote Method Invocation) to lokalny obiekt, który działa jako zastępca dla obiektu zdalnego. Pozwala ona na wywołanie metod zdalnych obiektów, jakby były one lokalne, umożliwiając zdalną komunikację w modelu klient-serwer.

## 15. Proszę omówić problem błędów żywotności w programach współbieżnych.

Błędy żywotności w programach współbieżnych to błędy, które wynikają z niewłaściwego zarządzania zasobami współdzielonymi przez wiele wątków, np. zakleszczenie (deadlock) czy zakłócenie (livelock). Prowadzą one do sytuacji, w których program nie może poprawnie zakończyć swojej pracy.

## 16. Na czym polega problem braku widoczności w Java i jak się go rozwiązuje?

Problem braku widoczności (visibility issue) w Java pojawia się, gdy jeden wątek modyfikuje zmienną, a zmiany te nie są widoczne dla innych wątków. Rozwiązaniem jest synchronizacja dostępu do zmiennych, np. przy użyciu słowa kluczowego `volatile` lub bloków synchronizacyjnych.

## 17. Dlaczego metoda stop z klasy Thread w Java uznana jest za metodę przestarzałą i jak można ją zastąpić?

Metoda `stop` w klasie `Thread` jest uznawana za przestarzałą, ponieważ jej użycie może prowadzić do nieprzewidywalnych stanów wątków. Zamiast tego zaleca się korzystanie z flag kontrolnych, które pozwalają bezpiecznie zakończyć wątek poprzez odpowiednią obsługę przerywania (`interrupt`).

# Projektowanie sieci komputerowych

## 18. Jakie są zalety modularyzacji w budowie sieci komputerowej?

Modularyzacja w budowie sieci komputerowej zapewnia lepszą skalowalność, zarządzalność oraz elastyczność sieci. Ułatwia projektowanie, wdrażanie oraz konserwację sieci poprzez rozdzielenie funkcji na niezależne moduły, co pozwala na ich indywidualne aktualizacje i optymalizacje.

## 19. Dlaczego w sieciach dużej dostępności powinny być preferowane połączenia typu punkt-punkt o równych kosztach?

Połączenia punkt-punkt o równych kosztach zapewniają większą niezawodność i przewidywalność w sieciach dużej dostępności. Umożliwiają one równomierne rozłożenie ruchu sieciowego, co zwiększa wydajność oraz minimalizuje ryzyko zakłóceń w przypadku awarii jednego z połączeń.

## 20. Proszę wskazać zalety i wady translacji adresów sieciowych.

Zalety translacji adresów sieciowych (NAT) obejmują oszczędność publicznych adresów IP oraz zwiększenie bezpieczeństwa sieci poprzez ukrywanie wewnętrznej struktury adresowej. Wadą jest potencjalne opóźnienie w komunikacji oraz utrudnienia w realizacji niektórych usług, takich jak protokoły wymagające adresów publicznych.

# Zaawansowana grafika komputerowa

## 21. Filtry konwolucyjne dla obrazów rastrowych.

Filtry konwolucyjne to technika przetwarzania obrazów, polegająca na nałożeniu maski (jądra) na każdy piksel obrazu w celu uzyskania pożądanych efektów, takich jak wyostrzanie, rozmycie lub wykrywanie krawędzi. Operacja konwolucji polega na mnożeniu sąsiednich pikseli przez wartości jądra i sumowaniu wyników.

## 22. Skalowanie obrazów rastrowych (resampling).

Skalowanie obrazów rastrowych polega na zmianie rozdzielczości obrazu przy jednoczesnym zachowaniu jakości wizualnej. Proces ten wykorzystuje metody próbkowania, takie jak najbliższy sąsiad, interpolacja dwuliniowa czy interpolacja bikubiczna, które pozwalają na odpowiednie przeliczenie wartości pikseli.

## 23. Pojęcie grafu sceny.

Graf sceny to struktura danych wykorzystywana w grafice komputerowej do reprezentacji hierarchii obiektów w trójwymiarowej scenie. Każdy węzeł grafu reprezentuje obiekt lub grupę obiektów, a krawędzie między nimi opisują zależności przestrzenne lub transformacje.

# Symulacje Monte Carlo i superkomputery

## 24. Etapy algorytmu Metropolisa dla modelu Isinga.

Algorytm Metropolisa dla modelu Isinga stosowany jest do symulacji układów spinowych. Etapy obejmują: losowy wybór spina, obliczenie zmiany energii wynikającej z jego odwrócenia, a następnie akceptację lub odrzucenie zmiany na podstawie kryterium Metropolisa, co pozwala na badanie stanów równowagowych.

## 25. Omówić znaczenie warunku równowagi szczegółowej.

Warunek równowagi szczegółowej (detailed balance) oznacza, że w układzie termodynamicznym, w stanie równowagi, prawdopodobieństwo przejścia między dwoma stanami jest symetryczne. W symulacjach Monte Carlo zapewnia on poprawność generowanych rozkładów stacjonarnych.

## 26. Omówić dwie spośród następujących metod szacowania błędów statystycznych: naiwne odchylenie standardowe, jackknife, bootstrap, uwzględnienie autokorelacji.

Metoda jackknife polega na wielokrotnym usuwaniu pojedynczych obserwacji z zestawu danych i obliczaniu estymatorów na podstawie pozostałych danych, co pozwala oszacować wariancję estymatora. Z kolei metoda bootstrap polega na losowym próbkowaniu z powtórzeniami, co umożliwia symulację rozkładów estymatorów w celu wyznaczenia ich niepewności.

# Projektowanie obiektowe

## 27. Jaka jest różnica między testami wydajnościowymi, obciążeniowymi oraz stres testami?

Testy wydajnościowe mierzą szybkość działania systemu przy normalnych warunkach obciążenia. Testy obciążeniowe badają, jak system radzi sobie z dużymi ilościami równoczesnych operacji, natomiast stres testy sprawdzają stabilność systemu w warunkach ekstremalnych, np. przy przeciążeniach lub awariach.

## 28. Proszę opisać trzy wzorce behawioralne.

Trzy popularne wzorce behawioralne to:

- **Observer** – umożliwia obiektom subskrybowanie i otrzymywanie powiadomień o zmianach stanu innego obiektu.
- **Command** – przekształca żądania w obiekty, które można przechowywać, kolejnować i wywoływać.
- **Strategy** – definiuje rodzinę algorytmów, które można dynamicznie wybierać i stosować w zależności od potrzeb.

## 29. Jak działa prototyp w języku JavaScript?

Prototyp w JavaScript to mechanizm dziedziczenia, który pozwala obiektom na współdzielenie metod i właściwości. Każdy obiekt w JavaScript ma odniesienie do swojego prototypu, z którego może dziedziczyć właściwości, co pozwala na efektywne zarządzanie pamięcią i kodem.

## 30. Proszę opisać cztery podstawowe typy Singletona.

Cztery podstawowe typy Singletona obejmują:

- **Eager Singleton** – instancja tworzona przy starcie aplikacji.
- **Lazy Singleton** – instancja tworzona w momencie pierwszego wywołania.
- **Thread-safe Singleton** – instancja tworzona z użyciem mechanizmów synchronizacji, aby zapewnić bezpieczeństwo w środowiskach wielowątkowych.
- **Double-checked locking Singleton** – optymalizowany sposób tworzenia instancji z dodatkową kontrolą przy pierwszym dostępie w środowiskach wielowątkowych.

## 31. Czym jest dług technologiczny?

Dług technologiczny to metafora opisująca sytuację, w której krótkoterminowe decyzje technologiczne, podejmowane w celu szybkiego dostarczenia rozwiązania, prowadzą do wzrostu kosztów utrzymania i rozwijania oprogramowania w przyszłości.

# Zarządzanie projektami

## 32. Proszę podać najważniejsze współzależne parametry projektu

Najważniejsze współzależne parametry projektu to: **zakres**, **czas**, **koszt** oraz **jakość**. Zakres definiuje, co projekt ma dostarczyć, czas określa harmonogram realizacji zadań, a koszt dotyczy budżetu projektu. Jakość odnosi się do standardów, jakie produkt musi spełniać. Te cztery parametry są ze sobą ściśle powiązane – zmiana jednego wpływa na pozostałe.

## 33. Proszę podać etapy procesu zarządzania projektami

Proces zarządzania projektami obejmuje pięć głównych etapów:

1. **Inicjowanie projektu** – określenie celów projektu i jego uzasadnienia.
2. **Planowanie** – opracowanie harmonogramu, budżetu i alokacji zasobów.
3. **Wykonanie** – realizacja planów i monitorowanie postępu.
4. **Monitorowanie i kontrola** – ocena postępów i wprowadzenie ewentualnych korekt.
5. **Zamknięcie** – formalne zakończenie projektu, ocena wyników i wnioski na przyszłość.

## 34. Proszę wymienić wartości Manifestu Agile

Manifest Agile promuje cztery kluczowe wartości:

1. Ludzie i interakcje ponad procesy i narzędzia.
2. Działające oprogramowanie ponad obszerną dokumentację.
3. Współpraca z klientem ponad negocjację umów.
4. Reagowanie na zmiany ponad realizację założonego planu.

# Metody statystyczne

## 35. Stan stacjonarny w markowowskich procesach stochastycznych - metody wyznaczania i zastosowania.

Stan stacjonarny w markowowskich procesach stochastycznych to taki stan, w którym rozkład prawdopodobieństwa nie zmienia się w czasie. Metody jego wyznaczania obejmują rozwiązanie układu równań dla macierzy przejść. Zastosowania obejmują analizę systemów kolejkowych, modelowanie przepływów ruchu sieciowego oraz ocenę stabilności finansowej.

## 36. Systemy kolejkowe - definicja, typy, notacja Kendalla, współdzielenie procesora, prawo Little'a, przykłady systemów kolejkowych.

Systemy kolejkowe to modele matematyczne opisujące procesy obsługi zadań (np. klientów, pakietów). Notacja Kendalla opisuje systemy kolejkowe według schematu A/S/c/K/N/D, gdzie A to rozkład przyjścia, S to rozkład czasu obsługi, c to liczba serwerów, K to maksymalna liczba miejsc w systemie, N to liczba klientów, a D to zasady dyscypliny. Współdzielenie procesora polega na przydzielaniu czasu procesora wielu zadaniom. Prawo Little’a wyraża związek między średnią liczbą zadań w systemie, czasem ich przebywania i intensywnością przybywania.

## 37. Modele z ukrytym procesem Markowa - definicja i zastosowanie. Ogólna zasada działania algorytmu Viterbiego.

Modele z ukrytym procesem Markowa (HMM) to probabilistyczne modele, w których stan systemu jest ukryty, a obserwacje są widoczne. Zastosowanie HMM obejmuje rozpoznawanie mowy, analizę sekwencji DNA oraz prognozowanie szeregów czasowych. Algorytm Viterbiego służy do wyznaczania najbardziej prawdopodobnej sekwencji stanów ukrytych na podstawie obserwacji.

# Zaawansowane interfejsy graficzne

## 38. Wiązanie danych w WPF

Wiązanie danych w WPF (Windows Presentation Foundation) polega na automatycznym łączeniu źródeł danych z interfejsem użytkownika, co umożliwia dynamiczne aktualizowanie danych w interfejsie w reakcji na zmiany. Wiązanie może być jednokierunkowe, dwukierunkowe lub jednokrotne.

## 39. Metody testowania aplikacji posiadających graficzny interfejs użytkownika

Testowanie aplikacji z graficznym interfejsem użytkownika (GUI) obejmuje techniki, takie jak testy jednostkowe (np. testowanie poszczególnych komponentów), testy automatyczne (z użyciem narzędzi takich jak Selenium) oraz testy manualne, w których użytkownicy ręcznie sprawdzają funkcjonalność interfejsu.

## 40. Wzorzec MVVM

Wzorzec MVVM (Model-View-ViewModel) to wzorzec architektoniczny stosowany głównie w aplikacjach WPF, który oddziela logikę biznesową (Model) od interfejsu użytkownika (View) za pomocą warstwy pośredniej ViewModel. ViewModel odpowiada za przekształcenie danych i logiki w formę zrozumiałą dla interfejsu, co ułatwia testowanie i utrzymanie kodu.

# Bezpieczeństwo w sieciach

## 41. Omów zasadę działania firewalla

Firewall to system zabezpieczeń, który monitoruje i kontroluje ruch sieciowy na podstawie wcześniej ustalonych reguł. Jego główną funkcją jest filtrowanie ruchu, zarówno przychodzącego, jak i wychodzącego, w celu ochrony sieci przed nieautoryzowanym dostępem oraz atakami z zewnątrz.

## 42. Wymień znane metody kryptograficzne

Do znanych metod kryptograficznych zalicza się: **szyfrowanie symetryczne** (np. AES), **szyfrowanie asymetryczne** (np. RSA), **haszowanie** (np. SHA-256) oraz **protokoły kryptograficzne** (np. TLS). Szyfrowanie symetryczne korzysta z jednego klucza, podczas gdy asymetryczne opiera się na dwóch kluczach (publicznym i prywatnym).

## 43. Omów fazy ataków sieciowych.

Fazy ataków sieciowych obejmują:

1. **Rekonesans** – gromadzenie informacji o celu ataku.
2. **Skanowanie** – identyfikacja luk w systemach.
3. **Dostęp** – uzyskanie nieautoryzowanego dostępu.
4. **Utrzymanie dostępu** – tworzenie trwałych ścieżek do ponownego wejścia.
5. **Zacieranie śladów** – ukrycie śladów obecności atakującego.

# Projektowanie wspomagane komputerem

## 44. Rodzaje i charakterystyka akcji projektowych

Akcje projektowe to różnorodne czynności podejmowane podczas procesu projektowania wspomaganego komputerem (CAD). Mogą obejmować modelowanie 3D, tworzenie rysunków technicznych, symulacje oraz testowanie prototypów. Każda z tych akcji ma na celu optymalizację procesu tworzenia produktu.

## 45. Narzędzia wykorzystywane w projektowaniu wizualnym i ich charakterystyka

Narzędzia projektowania wizualnego obejmują oprogramowanie CAD, takie jak AutoCAD, SolidWorks, oraz narzędzia do renderowania, jak Blender czy 3ds Max. CAD jest używane do dokładnego modelowania i tworzenia dokumentacji technicznej, podczas gdy narzędzia do renderowania tworzą realistyczne wizualizacje projektów.

## 46. Definicja interpretacji grafu

Interpretacja grafu odnosi się do analizy struktury grafu w celu zrozumienia zależności między węzłami oraz krawędziami. Jest to istotne narzędzie w takich dziedzinach jak sieci komputerowe, biologia molekularna (np. analiza sieci genowych) czy optymalizacja tras.

# E-biznes

## 47. Czym jest monada?

Monada to abstrakcyjna struktura używana w programowaniu funkcyjnym, która pozwala na łączenie operacji w sposób czysty i bez efektów ubocznych. Monady są szeroko stosowane w językach takich jak Haskell do obsługi operacji wejścia-wyjścia, błędów oraz asynchroniczności.

## 48. Czym są kontenery oraz obrazy w Dockerze?

Kontenery w Dockerze to lekkie, przenośne środowiska uruchomieniowe, które pozwalają na izolację aplikacji wraz z ich zależnościami. Obrazy są natomiast niezmiennymi snapshotami środowisk, które służą do tworzenia kontenerów. Każdy obraz zawiera system plików, biblioteki oraz aplikację, co zapewnia spójność środowisk na różnych maszynach.

## 49. Czym jest trait?

Trait to mechanizm wielokrotnego dziedziczenia w niektórych językach programowania (np. w Rust), który pozwala na współdzielenie funkcji między różnymi typami bez konieczności dziedziczenia. Traits definiują funkcje, które muszą być zaimplementowane przez klasy lub struktury, co pozwala na tworzenie elastycznych i wielokrotnego użytku komponentów.

## 50. Jak działa tzw. Companion Object?

Companion Object w językach takich jak Scala to struktura, która działa jak statyczna klasa w innych językach. Obiekt Companion pozwala na definiowanie metod i wartości, które są powiązane z danym typem, ale nie wymagają instancji tego typu, co umożliwia implementację wzorców fabrycznych.

# Kryptografia

## 51. Proszę wyjaśnić, na czym polega kryptografia asymetryczna i jakie ma zastosowania?

Kryptografia asymetryczna wykorzystuje dwa różne klucze: publiczny i prywatny. Klucz publiczny jest udostępniany wszystkim, a prywatny pozostaje tajny. Zaszyfrowane dane kluczem publicznym mogą być odszyfrowane tylko kluczem prywatnym. Zastosowania kryptografii asymetrycznej obejmują szyfrowanie wiadomości, podpisy cyfrowe oraz wymianę kluczy w protokołach takich jak TLS.

## 52. Proszę wyjaśnić, czym jest i jakie narzędzia kryptograficzne wykorzystuje protokół TLS?

TLS (Transport Layer Security) to protokół kryptograficzny używany do zapewnienia bezpiecznej komunikacji w sieciach komputerowych. TLS korzysta z szyfrowania asymetrycznego (np. RSA) do uzgadniania sesji oraz szyfrowania symetrycznego (np. AES) do ochrony transmisji danych. Dodatkowo wykorzystuje podpisy cyfrowe oraz certyfikaty do weryfikacji tożsamości stron.

## 53. Proszę wymienić i krótko scharakteryzować główne przykłady ataków na systemy kryptograficzne.

Do głównych przykładów ataków na systemy kryptograficzne należą:

- **Atak siłowy (brute force)** – próba odszyfrowania danych poprzez wypróbowanie wszystkich możliwych kombinacji kluczy.
- **Atak słownikowy** – polega na wykorzystaniu listy popularnych haseł lub kluczy do złamania szyfrowania.
- **Ataki boczne (side-channel attacks)** – wykorzystują informacje z fizycznych właściwości systemu (np. zużycie energii, czas operacji) w celu odszyfrowania danych.
- **Atak man-in-the-middle** – atakujący przechwytuje i zmienia komunikację między dwoma stronami bez ich wiedzy.

# Głębokie sieci neuronowe

## 54. Sieci neuronowe: podstawowe informacje. Z czego się składają, jak się je uczy.

Sieci neuronowe składają się z warstw neuronów (wejściowej, ukrytych i wyjściowej). Każdy neuron łączy się z innymi za pomocą wag, które są modyfikowane podczas procesu uczenia. Proces uczenia opiera się na algorytmach optymalizacji, takich jak wsteczna propagacja, które minimalizują błąd sieci na podstawie danych treningowych.

## 55. Konwolucyjne sieci neuronowe.

Konwolucyjne sieci neuronowe (CNN) są wykorzystywane głównie do analizy danych obrazowych. Wykorzystują warstwy konwolucyjne, które przetwarzają dane w lokalnych receptywnych polach, co pozwala na efektywną detekcję cech, takich jak krawędzie czy tekstury.

## 56. Rekurencyjne sieci neuronowe.

Rekurencyjne sieci neuronowe (RNN) to typ sieci neuronowych, które mają pętle wewnątrz swojej struktury, co pozwala na przetwarzanie sekwencji danych, takich jak teksty lub serie czasowe. Dzięki tym pętlom RNN mogą zapamiętywać poprzednie informacje, co jest kluczowe przy analizie zależności czasowych.

## 57. Generative adversarial networks.

Generative adversarial networks (GAN) to model uczenia maszynowego składający się z dwóch sieci: generatora i dyskryminatora, które uczą się na zasadzie konkurencji. Generator stara się tworzyć fałszywe dane, które mają naśladować dane rzeczywiste, a dyskryminator ocenia, czy dane pochodzą z rzeczywistego zbioru danych czy od generatora.

## 58. Adversarial examples.

Adversarial examples to specjalnie skonstruowane dane wejściowe, które mogą zmylić model uczenia maszynowego i doprowadzić go do błędnych decyzji. Przykłady te są stosowane w testowaniu bezpieczeństwa modeli, szczególnie w aplikacjach takich jak rozpoznawanie obrazów czy autonomiczne pojazdy.

# Komputerowa analiza zagadnień różniczkowych

## 59. Jawne i niejawne metody Rungego-Kutty i ich obszary stabilności.

Jawne metody Rungego-Kutty są łatwe do implementacji, ponieważ obliczenia opierają się na wartości funkcji w poprzednim kroku, co czyni je szybkim rozwiązaniem. Niejawne metody, choć bardziej złożone, są stabilniejsze w przypadku sztywnych równań różniczkowych, gdzie konieczna jest większa stabilność numeryczna. Obszary stabilności zależą od wyboru metody oraz wartości kroków czasowych.

## 60. Adaptacyjna zmiana kroku całkowania i zagnieżdżone metody Rungego-Kutty.

Adaptacyjna zmiana kroku całkowania polega na dynamicznym dostosowywaniu długości kroku w zależności od lokalnych błędów obliczeniowych. Metody zagnieżdżone Rungego-Kutty łączą różne porządki dokładności, co pozwala na efektywne kontrolowanie błędów i automatyczną zmianę kroków czasowych.

## 61. Metody dla dwupunktowych problemów brzegowych.

Metody numeryczne dla dwupunktowych problemów brzegowych obejmują metody różnic skończonych, elementów skończonych oraz metody strzałowe. Każda z tych technik polega na przybliżaniu rozwiązania poprzez dyskretyzację przestrzeni problemu i jego równań.

# Analiza szeregów czasowych

## 62. Procesy AR, MA, ARMA i ARIMA

Procesy AR (autoregresja), MA (średnia ruchoma), ARMA (autoregresja i średnia ruchoma) oraz ARIMA (zintegrowany proces ARMA) to modele statystyczne stosowane do analizy szeregów czasowych. Modele AR przewidują wartość zmiennej na podstawie jej przeszłych wartości, MA opiera się na przeszłych błędach prognoz, a ARIMA łączy te dwa podejścia i uwzględnia różnicowanie dla usunięcia trendu.

## 63. Szeregi z długoczasowymi korelacjami, wykładnik Hursta i metody jego obliczania

Szeregi z długoczasowymi korelacjami cechują się silną zależnością między odległymi w czasie wartościami. Wykładnik Hursta mierzy stopień tej zależności i wskazuje, czy proces jest trendujący, przypadkowy czy anty-persistentny. Obliczanie wykładnika Hursta odbywa się m.in. metodą R/S (rescaled range analysis).

## 64. Zastosowania falek (wavelets) do kompresji i odszumiania sygnałów

Falki (wavelets) są stosowane do dekompozycji sygnałów na składowe o różnych częstotliwościach i rozdzielczościach, co pozwala na skuteczną kompresję danych oraz usuwanie szumów. Kompresja oparta na falach umożliwia zachowanie istotnych cech sygnału przy jednoczesnym zmniejszeniu jego rozmiaru.

# Biometria

## 65. Metody weryfikacji tożsamości użytkownika w systemie informatycznym

Metody weryfikacji tożsamości użytkownika obejmują techniki biometryczne (np. odcisk palca, rozpoznawanie twarzy, skanowanie tęczówki), hasła oraz tokeny fizyczne lub programowe. Weryfikacja biometryczna opiera się na unikalnych cechach fizycznych lub behawioralnych osoby.

## 66. Jakie cechy powinien mieć biometryczny system identyfikacji/weryfikacji tożsamości?

Biometryczny system identyfikacji powinien być **dokładny**, **szybki**, **bezpieczny** oraz **odporny na oszustwa**. Ważne jest także, aby system cechował się niską podatnością na fałszywe odrzucenia oraz fałszywe zaakceptowania, a także zapewniał prywatność użytkowników.

## 67. Rozpoznawanie mowy oraz identyfikacja mówcy (za trudne …?)

Rozpoznawanie mowy to proces przekształcania sygnału mowy na tekst, podczas gdy identyfikacja mówcy polega na określeniu tożsamości osoby na podstawie cech głosu. Proces ten wymaga analizy parametrów akustycznych oraz wykorzystania zaawansowanych modeli matematycznych, takich jak HMM czy sieci neuronowe.

## 68. Klasyfikacja statystyczna w rozpoznawaniu obrazów twarzy (pewnie też za trudne …) zamiast tego może być…

Klasyfikacja statystyczna w rozpoznawaniu twarzy polega na analizie cech charakterystycznych twarzy i porównaniu ich z zapisanymi wzorcami. Stosuje się metody takie jak analiza głównych składowych (PCA) oraz maszyny wektorów nośnych (SVM), które pozwalają na skuteczną klasyfikację obrazów.

## 69. Jak działa binarny klasyfikator obrazów?

Binarny klasyfikator obrazów to algorytm, który przypisuje każdemu obrazowi jedną z dwóch klas na podstawie jego cech. Przykładem może być klasyfikator SVM, który rozdziela dane na dwie klasy za pomocą hiperpowierzchni, maksymalizując odległość między przykładami różnych klas.

# Projektowanie aplikacji internetowych

## 70. Omów architekturę Model-Widok-Kontroler (MVC) w kontekście działania aplikacji internetowej.

Architektura Model-Widok-Kontroler (MVC) dzieli aplikację na trzy główne komponenty: **Model**, który odpowiada za logikę biznesową i zarządzanie danymi, **Widok** (View), który prezentuje dane użytkownikowi, oraz **Kontroler** (Controller), który obsługuje interakcje użytkownika i aktualizuje model oraz widok. Taki podział ułatwia utrzymanie kodu i jego testowanie.

## 71. Omów model komunikacji asynchronicznej dla aplikacji internetowych oraz wykorzystanie podejścia REST wg. modelu Richardsona.

Model komunikacji asynchronicznej w aplikacjach internetowych opiera się na przetwarzaniu żądań bez blokowania głównego wątku, co pozwala na lepszą obsługę wielu użytkowników. Podejście REST (Representational State Transfer) według modelu Richardsona składa się z czterech poziomów: zasoby identyfikowane za pomocą URI, operacje CRUD, hiperłącza oraz kontrola wersji, co prowadzi do tworzenia skalowalnych i łatwych w utrzymaniu API.

## 72. Omów model tworzenia aplikacji internetowych w oparciu o architekturę rozproszonych mikroserwisów SOA.

Model mikroserwisów w architekturze SOA (Service-Oriented Architecture) polega na dzieleniu aplikacji na niezależne usługi, z których każda realizuje oddzielną funkcję. Usługi te komunikują się ze sobą za pomocą protokołów takich jak HTTP lub gRPC, co pozwala na elastyczny rozwój, wdrażanie i skalowanie aplikacji internetowych.

# Geometria 3D dla projektantów gier wideo

## 73. W jaki sposób modelujemy bryłę widzenia?

Bryła widzenia (frustum) jest modelem przestrzeni widocznej przez kamerę w grafice 3D. Jest to stożek ścięty, który ogranicza widoczność sceny w zależności od parametrów kamery, takich jak pole widzenia (FOV), odległości od kamery oraz płaszczyzny obcinające (near i far clipping planes).

## 74. Przedstaw model oświetlenia Blinna-Phonga

Model oświetlenia Blinna-Phonga to model, który opisuje interakcję światła z powierzchnią obiektu, uwzględniając trzy komponenty: **oświetlenie ambientowe** (rozproszone), **dyfuzyjne** (zależne od kąta padania światła) oraz **specularne** (odbicie światła). Modyfikacja Blinna-Phonga optymalizuje obliczenia poprzez zastosowanie półwektora (half-vector), co poprawia efektywność wyznaczania refleksów świetlnych.

## 75. Wyjaśnij różnicę między cieniowaniem Gouraud i cieniowaniem Phonga

Cieniowanie Gouraud polega na interpolacji kolorów wierzchołków trójkąta, co prowadzi do szybszych, ale mniej dokładnych wyników. Cieniowanie Phonga interpoluje wektory normalne dla każdego piksela, co pozwala na bardziej realistyczne odwzorowanie efektów oświetlenia, zwłaszcza w przypadku refleksów.

## 76. Przestaw zastosowanie metody śledzenia promieni do wyznaczania elementów widocznych na scenie

Śledzenie promieni (ray tracing) polega na symulacji toru promieni świetlnych od kamery, które odbijają się od obiektów sceny. Technika ta umożliwia realistyczne wyznaczanie oświetlenia, cieni i odbić, co jest szeroko stosowane w tworzeniu fotorealistycznych grafik oraz w grach wideo.

## 77. Przedstaw opis krzywych kubicznych. Co to są krzywe Beziera, splajny Catmulla-Roma i krzywe NURBS?

Krzywe kubiczne to krzywe opisane przez wielomiany trzeciego stopnia, które są często używane w grafice komputerowej do modelowania płynnych kształtów. Krzywe Beziera wykorzystują punkty kontrolne do definiowania swojego kształtu, splajny Catmulla-Roma pozwalają na płynne przejścia przez punkty kontrolne, a NURBS (Non-Uniform Rational B-Splines) to zaawansowane krzywe, które mogą precyzyjnie odwzorowywać zarówno kształty płaskie, jak i przestrzenne.
