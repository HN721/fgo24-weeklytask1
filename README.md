# Weekly Task 1 Aloritma & Javascript

## Algoritma Palindrom

1. Mulai
1. Input Kalimat
1. Validasi Kalimat
1. Buat Variable reverse
1. Loop Kalimat
1. Re assign Kalimat yang di balik ke reverse
1. Jika Kalimat di reverse sama dengan kalimat awal Print:"Palindrom"
1. Jika Tidak "Bukan Palindrom
1. Selesai

```mermaid
flowchart TD

A@{shape: circle , label: "Mulai"}
B@{shape: lean-r, label: "Kalimat === 'string'?"}
C@{shape: rectangle, label: "reverse = Null"}
H@{shape: rectangle, label: "Looping Kalimat"}
I@{shape: rectangle, label: "re-assign reverse = Kalimat "}
D@{shape: diamond, label: "Kalimat == reverse?"}
E@{shape: lean-l, label: "Palindrom"}
F@{shape: lean-l, label: "Bukan Palindrom"}
G@{shape: dbl-circ, label: "Selesai"}
A --> B
B --False--> A
B --True--> C
C --> H
H --> I
I --> D
D --Benar--> E
D --Salah--> F
E --> G
F --> G
```

## Algoritma Reverse Word

1. Masukkan input berupa string/kalimat.
2. Pecah kalimat menjadi array kata-kata menggunakan pemisah spasi.
3. Balik urutan array kata-kata.
4. Gabungkan kembali array menjadi string.
5. Cetak kalimat hasil.
6. Selesai.

```mermaid
flowchart TD
    A@{shape: circle,label: "Mulai"}
    B@{shape: lean-r, label: "Input Kalimat"  }
    C@{shape: rectangle, label: "Pecah kalimat menjadi array kata-kata menggunakan pemisah spasi"}
    D@{shape:rectangle, label: "Balik Urutan Array kata-kata"}
    E@{shape:rectangle , label: "Gabungkan kembali array menjadi string"}
    F@{shape: lean-r , label: "Cetak Kalimat"}
    G@{shape: dbl-circ , label: "Selesai"}

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G


```
