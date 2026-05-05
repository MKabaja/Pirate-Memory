# 🏴‍☠️ Franiu i Piraci – Pirate Memory

Edukacyjna gra memory dla dzieci, zbudowana w React + Vite. Zadaniem gracza jest odnalezienie par: litery i odpowiadającego jej obrazka ze skarbami piratów.

## 🎮 Jak grać?

1. Na planszy leży 12 zakrytych kart (6 par liter + 6 par obrazków).
2. Kliknij dowolną kartę, aby ją odkryć.
3. Następnie kliknij drugą kartę – jeśli litera pasuje do obrazka, para zostaje dopasowana i znika ze stołu.
4. Jeśli karty nie pasują, zostają zakryte z powrotem po chwili.
5. Gra kończy się, gdy wszystkie pary zostaną dopasowane.

## 🛠️ Technologie

| Technologia | Wersja |
|---|---|
| [React](https://react.dev/) | ^19.2.0 |
| [Vite](https://vitejs.dev/) | ^7.2.4 |
| JavaScript (ESModules) | – |

## 📁 Struktura projektu

```
src/
├── components/
│   ├── Card.jsx        # Pojedyncza karta (awers/rewers, efekt flip)
│   ├── Card.css
│   ├── Gameboard.jsx   # Plansza gry, logika stanu talii
│   ├── Gameboard.css
│   ├── GameOver.jsx    # Ekran końca gry
│   ├── Header.jsx      # Nagłówek strony
│   └── Header.css
├── data/
│   └── cardData.js     # Dane par (litera, słowo, ścieżka do obrazka)
├── utils/
│   └── gameLogic.js    # Tasowanie i generowanie planszy
├── App.jsx
├── App.css
├── index.css
└── main.jsx
public/
└── cards/              # Obrazki kart (png)
```

## 🚀 Uruchomienie lokalne

### Wymagania

- [Node.js](https://nodejs.org/) w wersji 18 lub nowszej

### Instalacja i uruchomienie

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`.

### Pozostałe polecenia

```bash
# Zbuduj wersję produkcyjną
npm run build

# Podgląd wersji produkcyjnej
npm run preview

# Uruchom linter
npm run lint
```

## 🃏 Karty

Gra zawiera 15 dostępnych par (za każdym razem losowo wybranych 6):

| Litera | Słowo | Obrazek |
|---|---|---|
| S | Statek | ship.png |
| M | Miecz | sword.png |
| C | Czapka | hat.png |
| P | Papuga | parrot.png |
| K | Kraken ship | kraken-ship.png |
| W | Wyspa | island.png |
| F | Flaga | flag.png |
| Z | Złoto | gold.png |
| O | Opaska | band.png |
| L | Lina | rope.png |
| B | Beczka | barrel.png |
| A | Ali Hoop | ali-hoop.png |
| H | Hak | hook.png |
| D | Dzwon | bell.png |
| Ż | Żagiel | sail.png |
