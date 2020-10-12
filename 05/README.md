# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; JavaScript: API & FETCH #05

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Tym razem implementacja już istnieje. Mamy w pliku `DB.js` klasę o tej samej nazwie, która imituje bazę danych. Przykład jej użycia mógłby wyglądać tak jak poniżej:
```
const db = new DB();
db.insert({a: 1, b: 2})
    .then(() => db.insert({a: 3, b: 4}))
    .then(() => db.remove(2))
    .then(() => db.update({id: 1}))
    .then(() => db.getRows())
    .then(rows => console.log(rows)); // [{id: 1}]
```

Poszczególne metody wykonuja asynchornicznie operację: zapisu, odczytu, modyfikacji i usuwania danych z bazy. Przed napisaniem testów postaraj sie zrozumieć kod, którym taj został napisany.

Metoda `.async()` udaje tylko kod aynchroniczny. W rzeczywistym rozwiązaniu czego takiego byśmy nie implementowali. Tego elementu nie testujemy.

Twoim zadaniem jest napisanie testów dla tej klasy. Pamiętaj, że ten kod jest asynchroniczny. Postaraj się do każdej metody napisać kilka testów. Na pewno powinieneś napisać testy, które sprawdzają poprawność działania, ale również moment kiedy obietnica jest odrzucona.

Testy uruchamiasz przez `npm run test-05`.

Jeśli znajdziesz błędy w implementacji postaraj się je naprawić. 

&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-api-and-fetch/)