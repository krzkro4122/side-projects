# Metody statystyczne

## 37. Modele z ukrytym procesem Markowa - definicja i zastosowanie. Ogólna zasada działania algorytmu Viterbiego.

Modele z ukrytym procesem Markowa (HMM) to probabilistyczne modele, w których stan systemu jest ukryty, a obserwacje są widoczne. Zastosowanie HMM obejmuje rozpoznawanie mowy, analizę sekwencji DNA oraz prognozowanie szeregów czasowych. Algorytm Viterbiego służy do wyznaczania najbardziej prawdopodobnej sekwencji stanów ukrytych na podstawie obserwacji.

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

# Geometria 3D dla projektantów gier wideo

## 74. Przedstaw model oświetlenia Blinna-Phonga

Model oświetlenia Blinna-Phonga to model, który opisuje interakcję światła z powierzchnią obiektu, uwzględniając trzy komponenty: **oświetlenie ambientowe** (rozproszone), **dyfuzyjne** (zależne od kąta padania światła) oraz **specularne** (odbicie światła). Modyfikacja Blinna-Phonga optymalizuje obliczenia poprzez zastosowanie półwektora (half-vector), co poprawia efektywność wyznaczania refleksów świetlnych.

## 75. Wyjaśnij różnicę między cieniowaniem Gouraud i cieniowaniem Phonga

Cieniowanie Gouraud polega na interpolacji kolorów wierzchołków trójkąta, co prowadzi do szybszych, ale mniej dokładnych wyników. Cieniowanie Phonga interpoluje wektory normalne dla każdego piksela, co pozwala na bardziej realistyczne odwzorowanie efektów oświetlenia, zwłaszcza w przypadku refleksów.

## 77. Przedstaw opis krzywych kubicznych. Co to są krzywe Beziera, splajny Catmulla-Roma i krzywe NURBS?

Krzywe kubiczne to krzywe opisane przez wielomiany trzeciego stopnia, które są często używane w grafice komputerowej do modelowania płynnych kształtów. Krzywe Beziera wykorzystują punkty kontrolne do definiowania swojego kształtu, splajny Catmulla-Roma pozwalają na płynne przejścia przez punkty kontrolne, a NURBS (Non-Uniform Rational B-Splines) to zaawansowane krzywe, które mogą precyzyjnie odwzorowywać zarówno kształty płaskie, jak i przestrzenne.
