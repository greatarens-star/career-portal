const courses = [
    {
        "id": 1,
        "category": "arts",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF ARTS",
        "cutoff": 24.188
    },
    {
        "id": 2,
        "category": "arts",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF ARTS",
        "cutoff": 24.574
    },
    {
        "id": 3,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS",
        "cutoff": 24.286
    },
    {
        "id": 4,
        "category": "arts",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF ARTS",
        "cutoff": 23.714
    },
    {
        "id": 5,
        "category": "arts",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ARTS",
        "cutoff": 24.057
    },
    {
        "id": 6,
        "category": "arts",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS",
        "cutoff": 22.449
    },
    {
        "id": 7,
        "category": "arts",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF ARTS",
        "cutoff": 24.666
    },
    {
        "id": 8,
        "category": "arts",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF ARTS",
        "cutoff": 23.716
    },
    {
        "id": 9,
        "category": "arts",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF ARTS",
        "cutoff": 23.248
    },
    {
        "id": 10,
        "category": "arts",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF ARTS",
        "cutoff": 22.449
    },
    {
        "id": 11,
        "category": "arts",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ARTS",
        "cutoff": 22.449
    },
    {
        "id": 12,
        "category": "arts",
        "school": "KOITALEEL SAMOEI UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ARTS",
        "cutoff": 22.449
    },
    {
        "id": 13,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (WITH IT)",
        "cutoff": 23.721
    },
    {
        "id": 14,
        "category": "sci",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ARTS (PSYCHOLOGY, SOCIOLOGY & POLITICAL SCIENCE)",
        "cutoff": 22.449
    },
    {
        "id": 15,
        "category": "arch",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF ARCHITECTURAL STUDIES/BACHELOR OF ARCHITECTURE",
        "cutoff": 38.365
    },
    {
        "id": 16,
        "category": "arch",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ARCHITECTURAL STUDIES/BACHELOR OF ARCHITECTURE",
        "cutoff": 41.035
    },
    {
        "id": 17,
        "category": "arch",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF ARCHITECTURAL STUDIES/BACHELOR OF",
        "cutoff": 41.803
    },
    {
        "id": 18,
        "category": "arch",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF ARCHITECTURAL STUDIES/BACHELOR OF ARCHITECTURE",
        "cutoff": 42.99
    },
    {
        "id": 19,
        "category": "arch",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ARCHITECTURE",
        "cutoff": 41.494
    },
    {
        "id": 20,
        "category": "arts",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF QUANTITY SURVEYING",
        "cutoff": 38.424
    },
    {
        "id": 21,
        "category": "arts",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF QUANTITY SURVEYING",
        "cutoff": 39.763
    },
    {
        "id": 22,
        "category": "arts",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF QUANTITY SURVEYING",
        "cutoff": 40.232
    },
    {
        "id": 23,
        "category": "arts",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF ARTS (DESIGN)",
        "cutoff": 26.093
    },
    {
        "id": 24,
        "category": "arts",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF ARTS (ANTHROPOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 25,
        "category": "arts",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF ARTS IN ANTHROPOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 26,
        "category": "arts",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ARTS IN ANTHROPOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 27,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 28,
        "category": "sci",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 29,
        "category": "sci",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 30,
        "category": "sci",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE WITH IT)",
        "cutoff": 18.831
    },
    {
        "id": 31,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE, WITH IT)",
        "cutoff": 26.81
    },
    {
        "id": 32,
        "category": "sci",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE, WITH IT)",
        "cutoff": 18.831
    },
    {
        "id": 33,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)",
        "cutoff": 32.262
    },
    {
        "id": 34,
        "category": "sci",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)",
        "cutoff": 18.831
    },
    {
        "id": 35,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)",
        "cutoff": 34.474
    },
    {
        "id": 36,
        "category": "sci",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)",
        "cutoff": 18.831
    },
    {
        "id": 37,
        "category": "sci",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)",
        "cutoff": 18.831
    },
    {
        "id": 38,
        "category": "sci",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)",
        "cutoff": 23.617
    },
    {
        "id": 39,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)",
        "cutoff": 18.831
    },
    {
        "id": 40,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)",
        "cutoff": 24.905
    },
    {
        "id": 41,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)",
        "cutoff": 39.531
    },
    {
        "id": 42,
        "category": "sci",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 43,
        "category": "sci",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 44,
        "category": "sci",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 25.061
    },
    {
        "id": 45,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 25.416
    },
    {
        "id": 46,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 23.568
    },
    {
        "id": 47,
        "category": "sci",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 48,
        "category": "sci",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 28.075
    },
    {
        "id": 49,
        "category": "sci",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 24.443
    },
    {
        "id": 50,
        "category": "sci",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 51,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 34.347
    },
    {
        "id": 52,
        "category": "sci",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 53,
        "category": "sci",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 54,
        "category": "sci",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE",
        "cutoff": 18.831
    },
    {
        "id": 55,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY, WITH IT)",
        "cutoff": 25.535
    },
    {
        "id": 56,
        "category": "sci",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY, WITH IT)",
        "cutoff": 15.683
    },
    {
        "id": 57,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY)",
        "cutoff": 25.036
    },
    {
        "id": 58,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 59,
        "category": "sci",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 60,
        "category": "sci",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 61,
        "category": "sci",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 62,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY)",
        "cutoff": 27.458
    },
    {
        "id": 63,
        "category": "sci",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 64,
        "category": "sci",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INDUSTRIAL CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 65,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INDUSTRIAL CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 66,
        "category": "sci",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN INDUSTRIAL CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 67,
        "category": "sci",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN INDUSTRIAL CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 68,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN INDUSTRIAL CHEMISTRY",
        "cutoff": 24.943
    },
    {
        "id": 69,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICAL SCIENCES, WITH IT)",
        "cutoff": 22.755
    },
    {
        "id": 70,
        "category": "sci",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICAL SCIENCES, WITH IT)",
        "cutoff": 18.831
    },
    {
        "id": 71,
        "category": "sci",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS)",
        "cutoff": 18.831
    },
    {
        "id": 72,
        "category": "sci",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS)",
        "cutoff": 18.831
    },
    {
        "id": 73,
        "category": "sci",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS)",
        "cutoff": 24.252
    },
    {
        "id": 74,
        "category": "sci",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS)",
        "cutoff": 18.831
    },
    {
        "id": 75,
        "category": "sci",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS)",
        "cutoff": 18.831
    },
    {
        "id": 76,
        "category": "sci",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS)",
        "cutoff": 18.831
    },
    {
        "id": 77,
        "category": "sci",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS)",
        "cutoff": 18.831
    },
    {
        "id": 78,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS)",
        "cutoff": 32.945
    },
    {
        "id": 79,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN MATHEMATICS",
        "cutoff": 23.741
    },
    {
        "id": 80,
        "category": "sci",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE IN MATHEMATICS",
        "cutoff": 18.831
    },
    {
        "id": 81,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN MATHEMATICS",
        "cutoff": 18.831
    },
    {
        "id": 82,
        "category": "sci",
        "school": "KIRIRI WOMENS UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN MATHEMATICS",
        "cutoff": 18.831
    },
    {
        "id": 83,
        "category": "sci",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (METEOROLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 84,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (METEOROLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 85,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (BIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 86,
        "category": "sci",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (BIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 87,
        "category": "sci",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 88,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOLOGY)",
        "cutoff": 24.74
    },
    {
        "id": 89,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (BIOLOGY)",
        "cutoff": 24.957
    },
    {
        "id": 90,
        "category": "sci",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 91,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN BIOLOGY",
        "cutoff": 15.683
    },
    {
        "id": 92,
        "category": "sci",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN BIOLOGY",
        "cutoff": 15.683
    },
    {
        "id": 93,
        "category": "sci",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE IN BIOLOGY",
        "cutoff": 15.683
    },
    {
        "id": 94,
        "category": "sci",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF SCIENCE IN BIOLOGY",
        "cutoff": 15.683
    },
    {
        "id": 95,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN BIOLOGY ( BOTANY OR ZOOLOGY OPTION)",
        "cutoff": 15.683
    },
    {
        "id": 96,
        "category": "sci",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE(BIOLOGICAL SCIENCES)",
        "cutoff": 15.683
    },
    {
        "id": 97,
        "category": "sci",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 98,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 25.661
    },
    {
        "id": 99,
        "category": "sci",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 100,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 23.504
    },
    {
        "id": 101,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 102,
        "category": "sci",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 103,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 104,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 32.976
    },
    {
        "id": 105,
        "category": "sci",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 31.23
    },
    {
        "id": 106,
        "category": "sci",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 107,
        "category": "sci",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 108,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 25.581
    },
    {
        "id": 109,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY)",
        "cutoff": 32.695
    },
    {
        "id": 110,
        "category": "sci",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN BIOCHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 111,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE IN BIOCHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 112,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN BIOCHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 113,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY, WITH IT)",
        "cutoff": 30.294
    },
    {
        "id": 114,
        "category": "sci",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (GEOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 115,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (GEOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 116,
        "category": "sci",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN GEOLOGY",
        "cutoff": 15.683
    },
    {
        "id": 117,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ANALYTICAL CHEMISTRY WITH MANAGEMENT)",
        "cutoff": 25.901
    },
    {
        "id": 118,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ANALYTICAL CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 119,
        "category": "sci",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (ANALYTICAL CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 120,
        "category": "sci",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ANALYTICAL CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 121,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (ANALYTICAL CHEMISTRY)",
        "cutoff": 27.085
    },
    {
        "id": 122,
        "category": "sci",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ANALYTICAL CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 123,
        "category": "sci",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ANALYTICAL CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 124,
        "category": "sci",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ANALYTICAL CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 125,
        "category": "sci",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ANALYTICAL CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 126,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN ANALYTICAL CHEMISTRY",
        "cutoff": 24.651
    },
    {
        "id": 127,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE IN ANALYTICAL CHEMISTRY WITH COMPUTING",
        "cutoff": 15.683
    },
    {
        "id": 128,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ANALYTICAL CHEMISTRY, WITH IT)",
        "cutoff": 15.683
    },
    {
        "id": 129,
        "category": "it",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE",
        "cutoff": 26.766
    },
    {
        "id": 130,
        "category": "it",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 38.37
    },
    {
        "id": 131,
        "category": "it",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 25.117
    },
    {
        "id": 132,
        "category": "it",
        "school": "AFRICA NAZARENE UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 133,
        "category": "it",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 24.086
    },
    {
        "id": 134,
        "category": "it",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 36.48
    },
    {
        "id": 135,
        "category": "it",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 28.842
    },
    {
        "id": 136,
        "category": "it",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 35.372
    },
    {
        "id": 137,
        "category": "it",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 26.078
    },
    {
        "id": 138,
        "category": "it",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 43.497
    },
    {
        "id": 139,
        "category": "it",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 34.003
    },
    {
        "id": 140,
        "category": "it",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 24.015
    },
    {
        "id": 141,
        "category": "it",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 32.782
    },
    {
        "id": 142,
        "category": "it",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 143,
        "category": "it",
        "school": "KENYA HIGHLANDS EVANGELICAL UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 144,
        "category": "it",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 35.264
    },
    {
        "id": 145,
        "category": "it",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 38.155
    },
    {
        "id": 146,
        "category": "it",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 38.968
    },
    {
        "id": 147,
        "category": "it",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 44.825
    },
    {
        "id": 148,
        "category": "it",
        "school": "THE EAST AFRICAN UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 149,
        "category": "it",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 33.591
    },
    {
        "id": 150,
        "category": "it",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 151,
        "category": "it",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 152,
        "category": "it",
        "school": "RIARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 35.796
    },
    {
        "id": 153,
        "category": "it",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 24.072
    },
    {
        "id": 154,
        "category": "it",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 35.209
    },
    {
        "id": 155,
        "category": "it",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 37.695
    },
    {
        "id": 156,
        "category": "it",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 23.41
    },
    {
        "id": 157,
        "category": "it",
        "school": "GRETSA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 158,
        "category": "it",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 159,
        "category": "it",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 160,
        "category": "it",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 35.408
    },
    {
        "id": 161,
        "category": "it",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 41.039
    },
    {
        "id": 162,
        "category": "it",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 39.746
    },
    {
        "id": 163,
        "category": "it",
        "school": "PRESBYTERIAN UNIVERSITY OF EAST AFRICA",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 164,
        "category": "it",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 33.433
    },
    {
        "id": 165,
        "category": "it",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 24.643
    },
    {
        "id": 166,
        "category": "it",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 44.101
    },
    {
        "id": 167,
        "category": "it",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 39.238
    },
    {
        "id": 168,
        "category": "it",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 169,
        "category": "it",
        "school": "KIRIRI WOMENS UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 170,
        "category": "it",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 25.508
    },
    {
        "id": 171,
        "category": "it",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 172,
        "category": "it",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 173,
        "category": "it",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 174,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ENGINEERING (CIVIL ENGINEERING)",
        "cutoff": 41.924
    },
    {
        "id": 175,
        "category": "eng",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CIVIL ENGINEERING)",
        "cutoff": 28.212
    },
    {
        "id": 176,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CIVIL ENGINEERING)",
        "cutoff": 42.574
    },
    {
        "id": 177,
        "category": "eng",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CIVIL ENGINEERING)",
        "cutoff": 34.851
    },
    {
        "id": 178,
        "category": "eng",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (CIVIL ENGINEERING)",
        "cutoff": 43.463
    },
    {
        "id": 179,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
        "cutoff": 38.391
    },
    {
        "id": 180,
        "category": "eng",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
        "cutoff": 39.11
    },
    {
        "id": 181,
        "category": "eng",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
        "cutoff": 38.015
    },
    {
        "id": 182,
        "category": "eng",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
        "cutoff": 39.863
    },
    {
        "id": 183,
        "category": "eng",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
        "cutoff": 32.717
    },
    {
        "id": 184,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN CIVIL ENGINEERING",
        "cutoff": 42.618
    },
    {
        "id": 185,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ELECTRICAL & ELECTRONICS ENGINEERING)",
        "cutoff": 42.275
    },
    {
        "id": 186,
        "category": "eng",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (ELECTRICAL AND ELECTRONIC ENGINEERING)",
        "cutoff": 43.003
    },
    {
        "id": 187,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN ELECTRICAL & ELECTRONIC ENGINEERING",
        "cutoff": 35.82
    },
    {
        "id": 188,
        "category": "sci",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN ELECTRICAL AND ELECTRONIC",
        "cutoff": 38.823
    },
    {
        "id": 189,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN ELECTRICAL AND ELECTRONIC",
        "cutoff": 42.434
    },
    {
        "id": 190,
        "category": "eng",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ELECTRICAL AND ELECTRONICS ENGINEERING",
        "cutoff": 36.804
    },
    {
        "id": 191,
        "category": "eng",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ELECTRICAL AND ELECTRONICS ENGINEERING",
        "cutoff": 35.699
    },
    {
        "id": 192,
        "category": "eng",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ELECTRICAL AND ELECTRONICS ENGINEERING",
        "cutoff": 36.144
    },
    {
        "id": 193,
        "category": "eng",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN ELECTRICAL AND ELECTRONICS ENGINEERING",
        "cutoff": 35.502
    },
    {
        "id": 194,
        "category": "eng",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ELECTRICAL AND ELECTRONICS ENGINEERING)",
        "cutoff": 32.815
    },
    {
        "id": 195,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ENGINEERING (MECHANICAL ENGINEERING)",
        "cutoff": 39.887
    },
    {
        "id": 196,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MECHANICAL ENGINEERING)",
        "cutoff": 41.109
    },
    {
        "id": 197,
        "category": "eng",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MECHANICAL ENGINEERING)",
        "cutoff": 31.83
    },
    {
        "id": 198,
        "category": "eng",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (MECHANICAL ENGINEERING)",
        "cutoff": 41.835
    },
    {
        "id": 199,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING",
        "cutoff": 37.156
    },
    {
        "id": 200,
        "category": "eng",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING",
        "cutoff": 35.444
    },
    {
        "id": 201,
        "category": "eng",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING",
        "cutoff": 37.487
    },
    {
        "id": 202,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN MECHANICAL ENGINEERING",
        "cutoff": 41.45
    },
    {
        "id": 203,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ENGINEERING (GEOSPATIAL ENGINEERING)",
        "cutoff": 34.502
    },
    {
        "id": 204,
        "category": "eng",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (GEOSPATIAL ENGINEERING)",
        "cutoff": 35.105
    },
    {
        "id": 205,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE",
        "cutoff": 15.683
    },
    {
        "id": 206,
        "category": "sci",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE",
        "cutoff": 15.683
    },
    {
        "id": 207,
        "category": "sci",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE",
        "cutoff": 15.683
    },
    {
        "id": 208,
        "category": "sci",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE",
        "cutoff": 15.683
    },
    {
        "id": 209,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE",
        "cutoff": 15.683
    },
    {
        "id": 210,
        "category": "sci",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE",
        "cutoff": 15.683
    },
    {
        "id": 211,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (B.SC)",
        "cutoff": 15.683
    },
    {
        "id": 212,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (B.SC)",
        "cutoff": 15.683
    },
    {
        "id": 213,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (B.SC)",
        "cutoff": 15.683
    },
    {
        "id": 214,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (B.SC)",
        "cutoff": 15.683
    },
    {
        "id": 215,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BASIC SCIENCE, WITH IT)",
        "cutoff": 15.683
    },
    {
        "id": 216,
        "category": "sci",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BASIC SCIENCE, WITH IT)",
        "cutoff": 15.683
    },
    {
        "id": 217,
        "category": "sci",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (BSC.)",
        "cutoff": 15.683
    },
    {
        "id": 218,
        "category": "sci",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (BSC.)",
        "cutoff": 15.683
    },
    {
        "id": 219,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BSC.)",
        "cutoff": 15.683
    },
    {
        "id": 220,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BSC (SCIENCE)",
        "cutoff": 15.683
    },
    {
        "id": 221,
        "category": "sci",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE(PHYSICS, BIOLOGY,CHEMISTRY,MATHEMATICS)",
        "cutoff": 15.683
    },
    {
        "id": 222,
        "category": "eng",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF ENGINEERING (AGRICULTURAL & BIO-SYSTEMS ENGINEERING)",
        "cutoff": 27.819
    },
    {
        "id": 223,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL & BIO-SYSTEMS ENGINEERING)",
        "cutoff": 30.198
    },
    {
        "id": 224,
        "category": "agri",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL AND BIOSYSTEMS",
        "cutoff": 27.474
    },
    {
        "id": 225,
        "category": "eng",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ENGINEERING)",
        "cutoff": 27.708
    },
    {
        "id": 226,
        "category": "eng",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ENGINEERING)",
        "cutoff": 15.683
    },
    {
        "id": 227,
        "category": "eng",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (BIOSYSTEMS ENGINEERING)",
        "cutoff": 28.557
    },
    {
        "id": 228,
        "category": "agri",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 229,
        "category": "agri",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 230,
        "category": "agri",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 231,
        "category": "agri",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 232,
        "category": "agri",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 233,
        "category": "agri",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 234,
        "category": "agri",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 235,
        "category": "agri",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 236,
        "category": "agri",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 237,
        "category": "agri",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 238,
        "category": "agri",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 239,
        "category": "agri",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURE",
        "cutoff": 15.864
    },
    {
        "id": 240,
        "category": "agri",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURE",
        "cutoff": 15.864
    },
    {
        "id": 241,
        "category": "agri",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURE",
        "cutoff": 15.864
    },
    {
        "id": 242,
        "category": "agri",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURE",
        "cutoff": 15.864
    },
    {
        "id": 243,
        "category": "agri",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURE",
        "cutoff": 29.064
    },
    {
        "id": 244,
        "category": "agri",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURE",
        "cutoff": 15.864
    },
    {
        "id": 245,
        "category": "sci",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 246,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 247,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 25.46
    },
    {
        "id": 248,
        "category": "sci",
        "school": "UZIMA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 249,
        "category": "sci",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 250,
        "category": "sci",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 251,
        "category": "sci",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 252,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 25.28
    },
    {
        "id": 253,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 26.794
    },
    {
        "id": 254,
        "category": "sci",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MICROBIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 255,
        "category": "eng",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FOOD SCIENCE & TECHNOLOGY)",
        "cutoff": 24.645
    },
    {
        "id": 256,
        "category": "eng",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FOOD SCIENCE & TECHNOLOGY)",
        "cutoff": 15.864
    },
    {
        "id": 257,
        "category": "eng",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (FOOD SCIENCE & TECHNOLOGY)",
        "cutoff": 15.864
    },
    {
        "id": 258,
        "category": "eng",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (FOOD SCIENCE AND TECHNOLOGY)",
        "cutoff": 15.864
    },
    {
        "id": 259,
        "category": "eng",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (FOOD SCIENCE AND TECHNOLOGY)",
        "cutoff": 15.864
    },
    {
        "id": 260,
        "category": "eng",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (FOOD SCIENCE AND TECHNOLOGY)",
        "cutoff": 23.85
    },
    {
        "id": 261,
        "category": "eng",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY",
        "cutoff": 15.864
    },
    {
        "id": 262,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN FOOD SCIENCE AND TECHNOLOGY",
        "cutoff": 30.855
    },
    {
        "id": 263,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN FOOD TECHNOLOGY & QUALITY ASSURANCE",
        "cutoff": 15.864
    },
    {
        "id": 264,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (FOOD SCIENCE AND TECHNOLOGY)",
        "cutoff": 15.864
    },
    {
        "id": 265,
        "category": "eng",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (MICROPROCESSOR TECHNOLOGY AND INSTRUMENTATION)",
        "cutoff": 15.683
    },
    {
        "id": 266,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (ASTRONOMY AND ASTROPHYSICS)",
        "cutoff": 15.683
    },
    {
        "id": 267,
        "category": "med",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF DENTAL SURGERY",
        "cutoff": 44.502
    },
    {
        "id": 268,
        "category": "med",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF DENTAL SURGERY",
        "cutoff": 44.75
    },
    {
        "id": 269,
        "category": "med",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF PHARMACY",
        "cutoff": 41.093
    },
    {
        "id": 270,
        "category": "med",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF PHARMACY",
        "cutoff": 39.609
    },
    {
        "id": 271,
        "category": "med",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF PHARMACY",
        "cutoff": 43.111
    },
    {
        "id": 272,
        "category": "med",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF PHARMACY",
        "cutoff": 44.01
    },
    {
        "id": 273,
        "category": "med",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF PHARMACY",
        "cutoff": 43.872
    },
    {
        "id": 274,
        "category": "med",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF PHARMACY",
        "cutoff": 44.452
    },
    {
        "id": 275,
        "category": "med",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF PHARMACY",
        "cutoff": 42.989
    },
    {
        "id": 276,
        "category": "med",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF VETERINARY MEDICINE",
        "cutoff": 37.747
    },
    {
        "id": 277,
        "category": "med",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF VETERINARY MEDICINE AND SURGERY",
        "cutoff": 38.317
    },
    {
        "id": 278,
        "category": "med",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF MEDICINE & BACHELOR OF SURGERY",
        "cutoff": 44.563
    },
    {
        "id": 279,
        "category": "med",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF MEDICINE & BACHELOR OF SURGERY",
        "cutoff": 42.636
    },
    {
        "id": 280,
        "category": "med",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF MEDICINE & BACHELOR OF SURGERY (M.B.CH.B.)",
        "cutoff": 45.433
    },
    {
        "id": 281,
        "category": "med",
        "school": "UZIMA UNIVERSITY",
        "name": "BACHELOR OF MEDICINE & BACHELOR OF SURGERY (M.B.CH.B.)",
        "cutoff": 40.547
    },
    {
        "id": 282,
        "category": "med",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY",
        "cutoff": 44.435
    },
    {
        "id": 283,
        "category": "med",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY",
        "cutoff": 44.434
    },
    {
        "id": 284,
        "category": "med",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY",
        "cutoff": 44.434
    },
    {
        "id": 285,
        "category": "med",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY",
        "cutoff": 45.048
    },
    {
        "id": 286,
        "category": "med",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY",
        "cutoff": 45.584
    },
    {
        "id": 287,
        "category": "med",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY",
        "cutoff": 44.35
    },
    {
        "id": 288,
        "category": "med",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY (MBCHB)",
        "cutoff": 45.087
    },
    {
        "id": 289,
        "category": "med",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY (WITH IT)",
        "cutoff": 44.787
    },
    {
        "id": 290,
        "category": "med",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (NURSING, WITH IT)",
        "cutoff": 42.529
    },
    {
        "id": 291,
        "category": "med",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 39.875
    },
    {
        "id": 292,
        "category": "med",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 42.475
    },
    {
        "id": 293,
        "category": "med",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 39.387
    },
    {
        "id": 294,
        "category": "med",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 41.38
    },
    {
        "id": 295,
        "category": "med",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 41.076
    },
    {
        "id": 296,
        "category": "med",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 39.547
    },
    {
        "id": 297,
        "category": "med",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 40.452
    },
    {
        "id": 298,
        "category": "med",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 40.399
    },
    {
        "id": 299,
        "category": "med",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 42.39
    },
    {
        "id": 300,
        "category": "med",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 43.676
    },
    {
        "id": 301,
        "category": "med",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (NURSING)",
        "cutoff": 40.891
    },
    {
        "id": 302,
        "category": "med",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN NURSING",
        "cutoff": 42.166
    },
    {
        "id": 303,
        "category": "med",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN NURSING",
        "cutoff": 39.768
    },
    {
        "id": 304,
        "category": "med",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN NURSING",
        "cutoff": 39.32
    },
    {
        "id": 305,
        "category": "edu",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 29.991
    },
    {
        "id": 306,
        "category": "edu",
        "school": "GRETSA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 23.657
    },
    {
        "id": 307,
        "category": "edu",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 21.858
    },
    {
        "id": 308,
        "category": "edu",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 26.314
    },
    {
        "id": 309,
        "category": "edu",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 28.208
    },
    {
        "id": 310,
        "category": "edu",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 23.967
    },
    {
        "id": 311,
        "category": "edu",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 24.216
    },
    {
        "id": 312,
        "category": "edu",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 31.468
    },
    {
        "id": 313,
        "category": "edu",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 28.747
    },
    {
        "id": 314,
        "category": "edu",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 33.556
    },
    {
        "id": 315,
        "category": "edu",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 29.002
    },
    {
        "id": 316,
        "category": "edu",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 29.26
    },
    {
        "id": 317,
        "category": "edu",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 29.077
    },
    {
        "id": 318,
        "category": "edu",
        "school": "AFRICA INTERNATIONAL UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 21.858
    },
    {
        "id": 319,
        "category": "edu",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 29.507
    },
    {
        "id": 320,
        "category": "edu",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 27.258
    },
    {
        "id": 321,
        "category": "edu",
        "school": "KENYA HIGHLANDS EVANGELICAL UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 21.858
    },
    {
        "id": 322,
        "category": "edu",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 29.206
    },
    {
        "id": 323,
        "category": "edu",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 27.574
    },
    {
        "id": 324,
        "category": "edu",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 23.471
    },
    {
        "id": 325,
        "category": "edu",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 23.897
    },
    {
        "id": 326,
        "category": "edu",
        "school": "PRESBYTERIAN UNIVERSITY OF EAST AFRICA",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 21.858
    },
    {
        "id": 327,
        "category": "edu",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 29.47
    },
    {
        "id": 328,
        "category": "edu",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 28.166
    },
    {
        "id": 329,
        "category": "edu",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 30.04
    },
    {
        "id": 330,
        "category": "edu",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 32.421
    },
    {
        "id": 331,
        "category": "edu",
        "school": "KIRIRI WOMENS UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 21.858
    },
    {
        "id": 332,
        "category": "edu",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 27.773
    },
    {
        "id": 333,
        "category": "edu",
        "school": "TANGAZA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 23.781
    },
    {
        "id": 334,
        "category": "edu",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 22.986
    },
    {
        "id": 335,
        "category": "edu",
        "school": "LUKENYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 22.937
    },
    {
        "id": 336,
        "category": "edu",
        "school": "THE EAST AFRICAN UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 21.858
    },
    {
        "id": 337,
        "category": "edu",
        "school": "KENYA ASSEMBLIES OF GOD EAST UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 21.858
    },
    {
        "id": 338,
        "category": "edu",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 22.358
    },
    {
        "id": 339,
        "category": "edu",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 27.787
    },
    {
        "id": 340,
        "category": "edu",
        "school": "KOITALEEL SAMOEI UNIVERSITY COLLEGE",
        "name": "BACHELOR OF EDUCATION (ARTS)",
        "cutoff": 26.62
    },
    {
        "id": 341,
        "category": "edu",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 30.054
    },
    {
        "id": 342,
        "category": "edu",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 23.857
    },
    {
        "id": 343,
        "category": "edu",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 27.526
    },
    {
        "id": 344,
        "category": "edu",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 27.323
    },
    {
        "id": 345,
        "category": "edu",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 23.305
    },
    {
        "id": 346,
        "category": "edu",
        "school": "MARIST INTERNATIONAL UNIVERSITY COLLEGE",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 21.858
    },
    {
        "id": 347,
        "category": "edu",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 26.777
    },
    {
        "id": 348,
        "category": "edu",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 26.78
    },
    {
        "id": 349,
        "category": "edu",
        "school": "ISLAMIC UNIVERSITY OF KENYA",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 21.858
    },
    {
        "id": 350,
        "category": "edu",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION(ARTS) WITH IT",
        "cutoff": 29.533
    },
    {
        "id": 351,
        "category": "edu",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF EDUCATION(MAJOR ACCOUNTING AND BUSINESS ADMINISTRATION)",
        "cutoff": 22.935
    },
    {
        "id": 352,
        "category": "edu",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION ARTS",
        "cutoff": 28.171
    },
    {
        "id": 353,
        "category": "arts",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY & SECURITY STUDIES)",
        "cutoff": 26.631
    },
    {
        "id": 354,
        "category": "arts",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY AND PENOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 355,
        "category": "arts",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY AND SECURITY STUDIES)",
        "cutoff": 28.019
    },
    {
        "id": 356,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY AND SECURITY STUDIES)",
        "cutoff": 22.449
    },
    {
        "id": 357,
        "category": "arts",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY AND SECURITY STUDIES)",
        "cutoff": 22.449
    },
    {
        "id": 358,
        "category": "arts",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY AND SECURITY STUDIES)",
        "cutoff": 22.449
    },
    {
        "id": 359,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY, WITH IT)",
        "cutoff": 25.524
    },
    {
        "id": 360,
        "category": "arts",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY, WITH IT)",
        "cutoff": 22.449
    },
    {
        "id": 361,
        "category": "law",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN CRIMINOLOGY, CRIMINAL JUSTICE AND PUBLIC SAFETY",
        "cutoff": 22.449
    },
    {
        "id": 362,
        "category": "arts",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF CRIMINOLOGY",
        "cutoff": 23.602
    },
    {
        "id": 363,
        "category": "arts",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF CRIMINOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 364,
        "category": "sci",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (CRIMINOLOGY AND SECURITY STUDIES)",
        "cutoff": 22.449
    },
    {
        "id": 365,
        "category": "law",
        "school": "AFRICA NAZARENE UNIVERSITY",
        "name": "BACHELOR OF ARTS IN CRIMINAL JUSTICE AND SECURITY",
        "cutoff": 22.449
    },
    {
        "id": 366,
        "category": "law",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF ARTS IN CRIMINAL JUSTICE AND SECURITY",
        "cutoff": 22.449
    },
    {
        "id": 367,
        "category": "law",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY AND CRIMINAL JUSTICE)",
        "cutoff": 22.449
    },
    {
        "id": 368,
        "category": "law",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ARTS (CRIMINOLOGY AND CRIMINAL JUSTICE)",
        "cutoff": 22.449
    },
    {
        "id": 369,
        "category": "sci",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CRIMINOLOGY AND SECURITY MANAGEMENT)",
        "cutoff": 22.449
    },
    {
        "id": 370,
        "category": "arts",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN CRIMINOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 371,
        "category": "edu",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE, WITH IT)",
        "cutoff": 35.041
    },
    {
        "id": 372,
        "category": "edu",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE, WITH IT)",
        "cutoff": 27.083
    },
    {
        "id": 373,
        "category": "edu",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 35.289
    },
    {
        "id": 374,
        "category": "edu",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 23.662
    },
    {
        "id": 375,
        "category": "edu",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 28.565
    },
    {
        "id": 376,
        "category": "edu",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 24.256
    },
    {
        "id": 377,
        "category": "edu",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 32.607
    },
    {
        "id": 378,
        "category": "edu",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 31.945
    },
    {
        "id": 379,
        "category": "edu",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 23.842
    },
    {
        "id": 380,
        "category": "edu",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 31.01
    },
    {
        "id": 381,
        "category": "edu",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 23.419
    },
    {
        "id": 382,
        "category": "edu",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 34.392
    },
    {
        "id": 383,
        "category": "edu",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 31.88
    },
    {
        "id": 384,
        "category": "edu",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 37.208
    },
    {
        "id": 385,
        "category": "edu",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 32.77
    },
    {
        "id": 386,
        "category": "edu",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 31.292
    },
    {
        "id": 387,
        "category": "edu",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 31.005
    },
    {
        "id": 388,
        "category": "edu",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 31.29
    },
    {
        "id": 389,
        "category": "edu",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 27.259
    },
    {
        "id": 390,
        "category": "edu",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 31.551
    },
    {
        "id": 391,
        "category": "edu",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 31.846
    },
    {
        "id": 392,
        "category": "edu",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 23.598
    },
    {
        "id": 393,
        "category": "edu",
        "school": "PRESBYTERIAN UNIVERSITY OF EAST AFRICA",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 21.858
    },
    {
        "id": 394,
        "category": "edu",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 30.588
    },
    {
        "id": 395,
        "category": "edu",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 30.945
    },
    {
        "id": 396,
        "category": "edu",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 31.895
    },
    {
        "id": 397,
        "category": "edu",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 34.603
    },
    {
        "id": 398,
        "category": "edu",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 36.127
    },
    {
        "id": 399,
        "category": "edu",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 22.824
    },
    {
        "id": 400,
        "category": "edu",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 29.006
    },
    {
        "id": 401,
        "category": "edu",
        "school": "TANGAZA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 21.858
    },
    {
        "id": 402,
        "category": "edu",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 23.601
    },
    {
        "id": 403,
        "category": "edu",
        "school": "LUKENYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 21.858
    },
    {
        "id": 404,
        "category": "edu",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 24.164
    },
    {
        "id": 405,
        "category": "edu",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 27.354
    },
    {
        "id": 406,
        "category": "edu",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE)",
        "cutoff": 23.361
    },
    {
        "id": 407,
        "category": "edu",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION(SCIENCE WITH IT)",
        "cutoff": 30.153
    },
    {
        "id": 408,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (MARINE ENGINEERING)",
        "cutoff": 35.669
    },
    {
        "id": 409,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (WOOD SCIENCE AND INDUSTRIAL PROCESSES)",
        "cutoff": 15.864
    },
    {
        "id": 410,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (WILDLIFE ENTERPRISE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 411,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (WILDLIFE ENTERPRISES & MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 412,
        "category": "sci",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (WILDLIFE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 413,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (WILDLIFE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 414,
        "category": "arts",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF ARTS (SOCIAL WORK)",
        "cutoff": 22.449
    },
    {
        "id": 415,
        "category": "arts",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF ARTS (SOCIAL WORK)",
        "cutoff": 22.449
    },
    {
        "id": 416,
        "category": "arts",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF ARTS (SOCIAL WORK)",
        "cutoff": 22.449
    },
    {
        "id": 417,
        "category": "arts",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS (SOCIAL WORK)",
        "cutoff": 22.449
    },
    {
        "id": 418,
        "category": "arts",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF ARTS (SOCIAL WORK)",
        "cutoff": 22.449
    },
    {
        "id": 419,
        "category": "arts",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ARTS (SOCIAL WORK)",
        "cutoff": 22.449
    },
    {
        "id": 420,
        "category": "arts",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF ARTS(SOCIAL WORK)",
        "cutoff": 22.449
    },
    {
        "id": 421,
        "category": "arts",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SOCIAL WORK",
        "cutoff": 22.449
    },
    {
        "id": 422,
        "category": "arts",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF SOCIAL WORK",
        "cutoff": 22.449
    },
    {
        "id": 423,
        "category": "arts",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SOCIAL WORK",
        "cutoff": 22.449
    },
    {
        "id": 424,
        "category": "biz",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 425,
        "category": "biz",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 426,
        "category": "biz",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 427,
        "category": "biz",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 428,
        "category": "biz",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 26.413
    },
    {
        "id": 429,
        "category": "biz",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 25.284
    },
    {
        "id": 430,
        "category": "biz",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 431,
        "category": "biz",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 432,
        "category": "biz",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 433,
        "category": "biz",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 27.073
    },
    {
        "id": 434,
        "category": "biz",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 26.096
    },
    {
        "id": 435,
        "category": "biz",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 436,
        "category": "biz",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 437,
        "category": "biz",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 438,
        "category": "biz",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 439,
        "category": "biz",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 440,
        "category": "biz",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 441,
        "category": "biz",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE IN ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 442,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (RECORDS MANAGEMENT AND INFORMATION TECHNOLOGY)",
        "cutoff": 25.398
    },
    {
        "id": 443,
        "category": "sci",
        "school": "KENYA HIGHLANDS EVANGELICAL UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (RECORDS MANAGEMENT AND",
        "cutoff": 21.375
    },
    {
        "id": 444,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (PUBLIC ADMINISTRATION AND",
        "cutoff": 24.193
    },
    {
        "id": 445,
        "category": "it",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION SCIENCE)",
        "cutoff": 21.375
    },
    {
        "id": 446,
        "category": "it",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE (INFORMATION SCIENCE)",
        "cutoff": 28.183
    },
    {
        "id": 447,
        "category": "it",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION SCIENCE)",
        "cutoff": 21.375
    },
    {
        "id": 448,
        "category": "it",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (INFORMATION SCIENCES AND",
        "cutoff": 21.375
    },
    {
        "id": 449,
        "category": "it",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (INFORMATION SCIENCES AND KNOWLEDGE MANAGEMENT)",
        "cutoff": 21.375
    },
    {
        "id": 450,
        "category": "it",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION SCIENCES)",
        "cutoff": 21.375
    },
    {
        "id": 451,
        "category": "it",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN INFORMATION SCIENCE",
        "cutoff": 21.375
    },
    {
        "id": 452,
        "category": "it",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION SCIENCE",
        "cutoff": 21.375
    },
    {
        "id": 453,
        "category": "it",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION SCIENCE",
        "cutoff": 21.375
    },
    {
        "id": 454,
        "category": "it",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION SCIENCE",
        "cutoff": 21.375
    },
    {
        "id": 455,
        "category": "it",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION SCIENCES",
        "cutoff": 21.375
    },
    {
        "id": 456,
        "category": "biz",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF BUSINESS AND MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 457,
        "category": "biz",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 458,
        "category": "biz",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 459,
        "category": "biz",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 460,
        "category": "biz",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 461,
        "category": "biz",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 462,
        "category": "biz",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 463,
        "category": "biz",
        "school": "KENYA HIGHLANDS EVANGELICAL UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 464,
        "category": "biz",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 465,
        "category": "biz",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 466,
        "category": "biz",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 467,
        "category": "biz",
        "school": "MARIST INTERNATIONAL UNIVERSITY COLLEGE",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 468,
        "category": "biz",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 469,
        "category": "biz",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 470,
        "category": "biz",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 471,
        "category": "biz",
        "school": "ISLAMIC UNIVERSITY OF KENYA",
        "name": "BACHELOR OF BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 472,
        "category": "biz",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION IN MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 473,
        "category": "biz",
        "school": "THE EAST AFRICAN UNIVERSITY",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 474,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN MARKETING MANAGEMENT, WITH IT",
        "cutoff": 21.375
    },
    {
        "id": 475,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SECRETARIAL MANAGEMENT AND ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 476,
        "category": "biz",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR IN BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 477,
        "category": "biz",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR IN BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 478,
        "category": "biz",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "BACHELOR IN BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 479,
        "category": "biz",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR IN BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 480,
        "category": "biz",
        "school": "AFRICA INTERNATIONAL UNIVERSITY",
        "name": "BACHELOR IN BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 481,
        "category": "biz",
        "school": "KENYA ASSEMBLIES OF GOD EAST UNIVERSITY",
        "name": "BACHELOR IN BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 482,
        "category": "biz",
        "school": "RIARA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION",
        "cutoff": 24.913
    },
    {
        "id": 483,
        "category": "biz",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 484,
        "category": "biz",
        "school": "PRESBYTERIAN UNIVERSITY OF EAST AFRICA",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 485,
        "category": "biz",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 486,
        "category": "biz",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION ( WITH IT)",
        "cutoff": 21.375
    },
    {
        "id": 487,
        "category": "biz",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION ( WITH IT)",
        "cutoff": 21.375
    },
    {
        "id": 488,
        "category": "biz",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION WITH IT",
        "cutoff": 21.375
    },
    {
        "id": 489,
        "category": "biz",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR IN BUSINESS ADMINISTRATION IN MARKETING",
        "cutoff": 21.375
    },
    {
        "id": 490,
        "category": "biz",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF BUSINESS AND OFFICE MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 491,
        "category": "edu",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION (SPECIAL NEEDS EDUCATION, WITH",
        "cutoff": 26.909
    },
    {
        "id": 492,
        "category": "edu",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SPECIAL NEEDS EDUCATION, WITH",
        "cutoff": 32.47
    },
    {
        "id": 493,
        "category": "edu",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SPECIAL NEEDS EDUCATION, WITH",
        "cutoff": 24.218
    },
    {
        "id": 494,
        "category": "edu",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SPECIAL NEEDS EDUCATION)",
        "cutoff": 23.659
    },
    {
        "id": 495,
        "category": "edu",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SPECIAL NEEDS EDUCATION)",
        "cutoff": 34.963
    },
    {
        "id": 496,
        "category": "edu",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF EDUCATION (SPECIAL NEEDS EDUCATION)",
        "cutoff": 27.999
    },
    {
        "id": 497,
        "category": "edu",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SPECIAL NEEDS EDUCATION)",
        "cutoff": 25.847
    },
    {
        "id": 498,
        "category": "edu",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF EDUCATION (SPECIAL NEEDS EDUCATION)",
        "cutoff": 22.616
    },
    {
        "id": 499,
        "category": "edu",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF EDUCATION IN SPECIAL EDUCATION",
        "cutoff": 24.65
    },
    {
        "id": 500,
        "category": "edu",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF EDUCATION IN SPECIAL EDUCATION",
        "cutoff": 24.064
    },
    {
        "id": 501,
        "category": "edu",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF EDUCATION IN SPECIAL NEEDS EDUCATION",
        "cutoff": 21.858
    },
    {
        "id": 502,
        "category": "edu",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS) WITH SPECIAL NEEDS EDUCATION",
        "cutoff": 21.858
    },
    {
        "id": 503,
        "category": "edu",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS) WITH SPECIAL NEEDS EDUCATION",
        "cutoff": 21.858
    },
    {
        "id": 504,
        "category": "hosp",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (TOURISM MANAGEMENT)",
        "cutoff": 21.375
    },
    {
        "id": 505,
        "category": "hosp",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN TOURISM MANAGEMENT",
        "cutoff": 23.801
    },
    {
        "id": 506,
        "category": "hosp",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF TOURISM MANAGEMENT",
        "cutoff": 22.806
    },
    {
        "id": 507,
        "category": "hosp",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF TOURISM MANAGEMENT",
        "cutoff": 24.284
    },
    {
        "id": 508,
        "category": "hosp",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF TOURISM MANAGEMENT",
        "cutoff": 23.155
    },
    {
        "id": 509,
        "category": "hosp",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF TOURISM MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 510,
        "category": "hosp",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF TOURISM MANAGEMENT",
        "cutoff": 25.915
    },
    {
        "id": 511,
        "category": "hosp",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF TOURISM MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 512,
        "category": "hosp",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF TOURISM MANAGEMENT",
        "cutoff": 22.394
    },
    {
        "id": 513,
        "category": "eng",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 18.814
    },
    {
        "id": 514,
        "category": "media",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (INFORMATION AND COMMUNICATION",
        "cutoff": 24.975
    },
    {
        "id": 515,
        "category": "eng",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION AND COMMUNICATION TECHNOLOGY)",
        "cutoff": 22.216
    },
    {
        "id": 516,
        "category": "eng",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION AND COMMUNICATION TECHNOLOGY)",
        "cutoff": 22.972
    },
    {
        "id": 517,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF TECHNOLOGY IN INFORMATION & COMMUNICATION TECHNOLOGY",
        "cutoff": 26.749
    },
    {
        "id": 518,
        "category": "eng",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION AND COMMUNICATION TECHNOLOGY MANAGEMENT)",
        "cutoff": 28.658
    },
    {
        "id": 519,
        "category": "arts",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF ARTS (PUBLIC ADMINISTRATION)",
        "cutoff": 22.449
    },
    {
        "id": 520,
        "category": "arts",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF ARTS (PUBLIC ADMINISTRATION)",
        "cutoff": 24.352
    },
    {
        "id": 521,
        "category": "arts",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF ARTS (PUBLIC ADMINISTRATION)",
        "cutoff": 22.449
    },
    {
        "id": 522,
        "category": "arts",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF MUSIC",
        "cutoff": 25.152
    },
    {
        "id": 523,
        "category": "arts",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF MUSIC",
        "cutoff": 23.417
    },
    {
        "id": 524,
        "category": "arts",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF MUSIC THEORY AND COMPOSITION",
        "cutoff": 23.417
    },
    {
        "id": 525,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (MUSIC, WITH IT)",
        "cutoff": 23.417
    },
    {
        "id": 526,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS (MUSIC)",
        "cutoff": 23.417
    },
    {
        "id": 527,
        "category": "arts",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF ARTS (MUSIC)",
        "cutoff": 23.417
    },
    {
        "id": 528,
        "category": "arts",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF ARTS (MUSIC)",
        "cutoff": 23.417
    },
    {
        "id": 529,
        "category": "arts",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF ARTS (MUSIC)",
        "cutoff": 23.417
    },
    {
        "id": 530,
        "category": "edu",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS) MUSIC",
        "cutoff": 27.617
    },
    {
        "id": 531,
        "category": "edu",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (MUSIC, WITH IT)",
        "cutoff": 21.858
    },
    {
        "id": 532,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (STATISTICS)",
        "cutoff": 26.311
    },
    {
        "id": 533,
        "category": "sci",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 534,
        "category": "sci",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 535,
        "category": "sci",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 536,
        "category": "sci",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 537,
        "category": "sci",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 538,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN STATISTICS",
        "cutoff": 30.147
    },
    {
        "id": 539,
        "category": "sci",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 540,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 541,
        "category": "sci",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE ( APPLIED STATISTICS WITH",
        "cutoff": 18.814
    },
    {
        "id": 542,
        "category": "sci",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF SCIENCE ( APPLIED STATISTICS WITH",
        "cutoff": 18.814
    },
    {
        "id": 543,
        "category": "sci",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS WITH COMPUTING)",
        "cutoff": 18.814
    },
    {
        "id": 544,
        "category": "sci",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS WITH COMPUTING)",
        "cutoff": 18.814
    },
    {
        "id": 545,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS WITH COMPUTING)",
        "cutoff": 18.814
    },
    {
        "id": 546,
        "category": "sci",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS WITH COMPUTING)",
        "cutoff": 18.814
    },
    {
        "id": 547,
        "category": "sci",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS WITH PROGRAMMING)",
        "cutoff": 18.814
    },
    {
        "id": 548,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE IN APPLIED STATISTICS WITH",
        "cutoff": 18.814
    },
    {
        "id": 549,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (STATISTICS & PROGRAMMING)",
        "cutoff": 23.869
    },
    {
        "id": 550,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (STATISTICS & PROGRAMMING)",
        "cutoff": 18.814
    },
    {
        "id": 551,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS, WITH IT)",
        "cutoff": 18.831
    },
    {
        "id": 552,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS, WITH IT)",
        "cutoff": 18.831
    },
    {
        "id": 553,
        "category": "sci",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS, WITH IT)",
        "cutoff": 18.831
    },
    {
        "id": 554,
        "category": "sci",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS, WITH IT)",
        "cutoff": 18.831
    },
    {
        "id": 555,
        "category": "sci",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN APPLIED STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 556,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN APPLIED STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 557,
        "category": "sci",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 558,
        "category": "sci",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 559,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 560,
        "category": "arts",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF ARTS (PLANNING)",
        "cutoff": 18.392
    },
    {
        "id": 561,
        "category": "edu",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (FRENCH, WITH IT)",
        "cutoff": 26.243
    },
    {
        "id": 562,
        "category": "biz",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION AND MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 563,
        "category": "edu",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS) GERMAN",
        "cutoff": 26.632
    },
    {
        "id": 564,
        "category": "arts",
        "school": "AFRICA NAZARENE UNIVERSITY",
        "name": "BACHELOR OF ARTS (COMMUNITY DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 565,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS (COMMUNITY DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 566,
        "category": "arts",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF ARTS (COMMUNITY DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 567,
        "category": "arts",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF ARTS (COMMUNITY DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 568,
        "category": "arts",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF ARTS (COMMUNITY DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 569,
        "category": "arts",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF ARTS COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 570,
        "category": "arts",
        "school": "PAN AFRICA CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 571,
        "category": "arts",
        "school": "GRETSA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 572,
        "category": "arts",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 573,
        "category": "arts",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 574,
        "category": "arts",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 575,
        "category": "arts",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 576,
        "category": "arts",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 577,
        "category": "arts",
        "school": "LUKENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 578,
        "category": "arts",
        "school": "KENYA ASSEMBLIES OF GOD EAST UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 579,
        "category": "sci",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN BIOMEDICAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 580,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (AGROFORESTRY & RURAL DEVELOPMENT)",
        "cutoff": 15.864
    },
    {
        "id": 581,
        "category": "sci",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (AGROFORESTRY & RURAL DEVELOPMENT)",
        "cutoff": 15.864
    },
    {
        "id": 582,
        "category": "arch",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF CONSTRUCTION MANAGEMENT",
        "cutoff": 32.379
    },
    {
        "id": 583,
        "category": "arch",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF CONSTRUCTION MANAGEMENT",
        "cutoff": 30.243
    },
    {
        "id": 584,
        "category": "media",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF BROADCAST JOURNALISM",
        "cutoff": 24.24
    },
    {
        "id": 585,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (DRAMA AND THEATRE STUDIES, WITH IT)",
        "cutoff": 22.449
    },
    {
        "id": 586,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ARTS (THEATER ARTS & FILM TECHNOLOGY)",
        "cutoff": 23.977
    },
    {
        "id": 587,
        "category": "media",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF ARTS PERFORMING ARTS AND FILM",
        "cutoff": 22.449
    },
    {
        "id": 588,
        "category": "edu",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD DEVELOPMENT)",
        "cutoff": 21.858
    },
    {
        "id": 589,
        "category": "edu",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD DEVELOPMENT)",
        "cutoff": 21.858
    },
    {
        "id": 590,
        "category": "edu",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION, WITH IT)",
        "cutoff": 23.303
    },
    {
        "id": 591,
        "category": "edu",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION, WITH IT)",
        "cutoff": 21.858
    },
    {
        "id": 592,
        "category": "edu",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION)",
        "cutoff": 21.858
    },
    {
        "id": 593,
        "category": "edu",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION)",
        "cutoff": 21.858
    },
    {
        "id": 594,
        "category": "edu",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION)",
        "cutoff": 22.789
    },
    {
        "id": 595,
        "category": "edu",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION)",
        "cutoff": 27.337
    },
    {
        "id": 596,
        "category": "edu",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION)",
        "cutoff": 23.231
    },
    {
        "id": 597,
        "category": "edu",
        "school": "PRESBYTERIAN UNIVERSITY OF EAST AFRICA",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION)",
        "cutoff": 21.858
    },
    {
        "id": 598,
        "category": "edu",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION)",
        "cutoff": 23.552
    },
    {
        "id": 599,
        "category": "edu",
        "school": "LUKENYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION)",
        "cutoff": 21.858
    },
    {
        "id": 600,
        "category": "edu",
        "school": "KOITALEEL SAMOEI UNIVERSITY COLLEGE",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD EDUCATION)",
        "cutoff": 21.858
    },
    {
        "id": 601,
        "category": "edu",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF EDUCATION IN EARLY CHILDHOOD EDUCATION",
        "cutoff": 21.858
    },
    {
        "id": 602,
        "category": "edu",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF EDUCATION IN EARLY CHILDHOOD EDUCATION",
        "cutoff": 24.469
    },
    {
        "id": 603,
        "category": "edu",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION IN EARLY CHILDHOOD EDUCATION",
        "cutoff": 24.541
    },
    {
        "id": 604,
        "category": "edu",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION(EARLY CHILDHOOD DEVELOPMENT)",
        "cutoff": 23.906
    },
    {
        "id": 605,
        "category": "edu",
        "school": "AFRICA INTERNATIONAL UNIVERSITY",
        "name": "BACHELOR OF EDUCATION(EARLY CHILDHOOD DEVELOPMENT)",
        "cutoff": 21.858
    },
    {
        "id": 606,
        "category": "edu",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF EDUCATION(EARLY CHILDHOOD DEVELOPMENT)",
        "cutoff": 21.858
    },
    {
        "id": 607,
        "category": "media",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF JOURNALISM & MASS COMMUNICATION",
        "cutoff": 29.885
    },
    {
        "id": 608,
        "category": "media",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF JOURNALISM & MASS COMMUNICATION",
        "cutoff": 28.014
    },
    {
        "id": 609,
        "category": "media",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF JOURNALISM AND MASS COMMUNICATION",
        "cutoff": 23.688
    },
    {
        "id": 610,
        "category": "media",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF JOURNALISM AND MASS COMMUNICATION",
        "cutoff": 29.254
    },
    {
        "id": 611,
        "category": "media",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN JOURNALISM AND MASS COMMUNICATION",
        "cutoff": 29.127
    },
    {
        "id": 612,
        "category": "media",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN JOURNALISM AND MASS COMMUNICATION",
        "cutoff": 23.425
    },
    {
        "id": 613,
        "category": "media",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF COMMUNICATION & JOURNALISM",
        "cutoff": 26.116
    },
    {
        "id": 614,
        "category": "media",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF COMMUNICATION & JOURNALISM",
        "cutoff": 26.222
    },
    {
        "id": 615,
        "category": "media",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNICATION & JOURNALISM)",
        "cutoff": 24.367
    },
    {
        "id": 616,
        "category": "media",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNICATION AND JOURNALISM)",
        "cutoff": 22.449
    },
    {
        "id": 617,
        "category": "media",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNICATION AND JOURNALISM)",
        "cutoff": 30.2
    },
    {
        "id": 618,
        "category": "media",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF JOURNALISM",
        "cutoff": 29.043
    },
    {
        "id": 619,
        "category": "media",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF JOURNALISM",
        "cutoff": 29.749
    },
    {
        "id": 620,
        "category": "media",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF JOURNALISM",
        "cutoff": 22.449
    },
    {
        "id": 621,
        "category": "agri",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (MANAGEMENT OF AGRO-ECOSYSTEM AND ENVIRONMENT)",
        "cutoff": 15.864
    },
    {
        "id": 622,
        "category": "agri",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HORTICULTURE, WITH IT)",
        "cutoff": 15.864
    },
    {
        "id": 623,
        "category": "agri",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HORTICULTURE, WITH IT)",
        "cutoff": 15.864
    },
    {
        "id": 624,
        "category": "agri",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HORTICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 625,
        "category": "agri",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HORTICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 626,
        "category": "agri",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HORTICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 627,
        "category": "agri",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HORTICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 628,
        "category": "agri",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (HORTICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 629,
        "category": "agri",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HORTICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 630,
        "category": "agri",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (HORTICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 631,
        "category": "agri",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE HORTICULTURE",
        "cutoff": 15.864
    },
    {
        "id": 632,
        "category": "agri",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE HORTICULTURE",
        "cutoff": 15.864
    },
    {
        "id": 633,
        "category": "agri",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE(HORTICULTURE)",
        "cutoff": 15.864
    },
    {
        "id": 634,
        "category": "agri",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL CONSERVATION AND NATURAL RESOURCES MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 635,
        "category": "agri",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL CONSERVATION AND NATURAL RESOURCES MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 636,
        "category": "agri",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL CONSERVATION AND NATURAL RESOURCES MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 637,
        "category": "agri",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRI BUSINESS MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 638,
        "category": "agri",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRIBUSINESS MANAGEMENT & TRADE)",
        "cutoff": 22.511
    },
    {
        "id": 639,
        "category": "agri",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRIBUSINESS MANAGEMENT & TRADE)",
        "cutoff": 15.864
    },
    {
        "id": 640,
        "category": "agri",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRIBUSINESS MANAGEMENT, WITH",
        "cutoff": 15.864
    },
    {
        "id": 641,
        "category": "agri",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRIBUSINESS MANAGEMENT, WITH",
        "cutoff": 15.864
    },
    {
        "id": 642,
        "category": "agri",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE (AGRIBUSINESS MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 643,
        "category": "agri",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE AGRIBUSINESS MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 644,
        "category": "agri",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE(AGRIBUSINESS MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 645,
        "category": "agri",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AGRIBUSINESS MANGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 646,
        "category": "med",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL HEALTH)",
        "cutoff": 29.517
    },
    {
        "id": 647,
        "category": "med",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL HEALTH)",
        "cutoff": 28.791
    },
    {
        "id": 648,
        "category": "med",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL HEALTH)",
        "cutoff": 29.944
    },
    {
        "id": 649,
        "category": "med",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL HEALTH",
        "cutoff": 15.864
    },
    {
        "id": 650,
        "category": "med",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL HEALTH",
        "cutoff": 15.864
    },
    {
        "id": 651,
        "category": "med",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL HEALTH",
        "cutoff": 15.864
    },
    {
        "id": 652,
        "category": "med",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL HEALTH",
        "cutoff": 15.864
    },
    {
        "id": 653,
        "category": "med",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL HEALTH",
        "cutoff": 15.864
    },
    {
        "id": 654,
        "category": "arts",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF HUMAN RESOURCE MANAGEMENT",
        "cutoff": 27.86
    },
    {
        "id": 655,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF HUMAN RESOURCE MANAGEMENT",
        "cutoff": 23.579
    },
    {
        "id": 656,
        "category": "arts",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF HUMAN RESOURCE MANAGEMENT",
        "cutoff": 33.99
    },
    {
        "id": 657,
        "category": "arts",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF HUMAN RESOURCES MANAGEMENT",
        "cutoff": 23.556
    },
    {
        "id": 658,
        "category": "sci",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HUMAN RESOURCE MANAGEMENT)",
        "cutoff": 23.135
    },
    {
        "id": 659,
        "category": "sci",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (HUMAN RESOURCE MANAGEMENT)",
        "cutoff": 23.016
    },
    {
        "id": 660,
        "category": "sci",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HUMAN RESOURCE MANAGEMENT)",
        "cutoff": 21.375
    },
    {
        "id": 661,
        "category": "sci",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (HUMAN RESOURCE MANAGEMENT)",
        "cutoff": 21.375
    },
    {
        "id": 662,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HUMAN RESOURCE MANAGEMENT)",
        "cutoff": 26.656
    },
    {
        "id": 663,
        "category": "sci",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (HUMAN RESOURCE MANAGEMENT)",
        "cutoff": 21.375
    },
    {
        "id": 664,
        "category": "sci",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HUMAN REOURCE MANAGEMENT",
        "cutoff": 22.86
    },
    {
        "id": 665,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HUMAN RESOURCE MANAGEMENT, WITH IT",
        "cutoff": 27.266
    },
    {
        "id": 666,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 23.523
    },
    {
        "id": 667,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 29.685
    },
    {
        "id": 668,
        "category": "agri",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FOOD NUTRITION & DIETETICS)",
        "cutoff": 25.471
    },
    {
        "id": 669,
        "category": "agri",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FOOD NUTRITION & DIETETICS)",
        "cutoff": 15.864
    },
    {
        "id": 670,
        "category": "agri",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FOOD NUTRITION AND DIETETICS)",
        "cutoff": 15.864
    },
    {
        "id": 671,
        "category": "agri",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (FOOD NUTRITION AND DIETETICS)",
        "cutoff": 31.104
    },
    {
        "id": 672,
        "category": "agri",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FOOD, NUTRITION & DIETETICS)",
        "cutoff": 30.185
    },
    {
        "id": 673,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (NUTRITION AND DIETETICS, WITH IT)",
        "cutoff": 26.579
    },
    {
        "id": 674,
        "category": "agri",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN FOOD NUTRITION AND DIETETICS",
        "cutoff": 15.864
    },
    {
        "id": 675,
        "category": "agri",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN FOOD NUTRITION AND DIETETICS",
        "cutoff": 15.864
    },
    {
        "id": 676,
        "category": "agri",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN FOOD, NUTRITION AND DIETETICS",
        "cutoff": 15.864
    },
    {
        "id": 677,
        "category": "agri",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (FOOD SCIENCE & NUTRITION)",
        "cutoff": 15.864
    },
    {
        "id": 678,
        "category": "agri",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (FOOD SCIENCE AND NUTRITION)",
        "cutoff": 15.864
    },
    {
        "id": 679,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOMEDICAL SCIENCE AND",
        "cutoff": 32.603
    },
    {
        "id": 680,
        "category": "eng",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOMEDICAL SCIENCE & TECHNOLOGY)",
        "cutoff": 35.782
    },
    {
        "id": 681,
        "category": "sci",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOMEDICAL SCIENCE AND",
        "cutoff": 27.967
    },
    {
        "id": 682,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN BIOMEDICAL SCIENCES &",
        "cutoff": 34.532
    },
    {
        "id": 683,
        "category": "sci",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE IN BIOMEDICAL SCIENCES &",
        "cutoff": 24.733
    },
    {
        "id": 684,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (SCIENCE LABORATORY TECHNOLOGY)",
        "cutoff": 35.428
    },
    {
        "id": 685,
        "category": "eng",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (MEDICAL LABORATORY SCIENCE & TECHNOLOGY)",
        "cutoff": 41.309
    },
    {
        "id": 686,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MEDICAL LABORATORY SCIENCE)",
        "cutoff": 41.175
    },
    {
        "id": 687,
        "category": "sci",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MEDICAL LABORATORY SCIENCE)",
        "cutoff": 33.959
    },
    {
        "id": 688,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (MEDICAL LABORATORY SCIENCES)",
        "cutoff": 38.872
    },
    {
        "id": 689,
        "category": "sci",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (MEDICAL LABORATORY SCIENCES)",
        "cutoff": 38.044
    },
    {
        "id": 690,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 38.842
    },
    {
        "id": 691,
        "category": "sci",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 36.584
    },
    {
        "id": 692,
        "category": "sci",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 30.11
    },
    {
        "id": 693,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 38.08
    },
    {
        "id": 694,
        "category": "sci",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 30.11
    },
    {
        "id": 695,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 40.675
    },
    {
        "id": 696,
        "category": "sci",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 37.868
    },
    {
        "id": 697,
        "category": "med",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (OCCUPATIONAL HEALTH & SAFETY)",
        "cutoff": 26.923
    },
    {
        "id": 698,
        "category": "med",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (OCCUPATIONAL HEALTH & SAFETY)",
        "cutoff": 25.552
    },
    {
        "id": 699,
        "category": "sci",
        "school": "PRESBYTERIAN UNIVERSITY OF EAST AFRICA",
        "name": "BACHELOR OF SCIENCE IN OCCUPATIONAL THERAPY",
        "cutoff": 15.864
    },
    {
        "id": 700,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN OCCUPATIONAL THERAPY",
        "cutoff": 32.57
    },
    {
        "id": 701,
        "category": "media",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (TELECOMMUNICATION & INFORM.",
        "cutoff": 29.104
    },
    {
        "id": 702,
        "category": "media",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (TELECOMMUNICATION & INFORM.",
        "cutoff": 15.683
    },
    {
        "id": 703,
        "category": "media",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (TELECOMMUNICATION AND",
        "cutoff": 27.909
    },
    {
        "id": 704,
        "category": "media",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (TELECOMMUNICATION AND",
        "cutoff": 37.472
    },
    {
        "id": 705,
        "category": "biz",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF ARTS (ECONOMICS & SOCIOLOGY)",
        "cutoff": 18.831
    },
    {
        "id": 706,
        "category": "biz",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF ARTS (ECONOMICS & SOCIOLOGY)",
        "cutoff": 18.831
    },
    {
        "id": 707,
        "category": "biz",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS (ECONOMICS AND SOCIOLOGY)",
        "cutoff": 18.831
    },
    {
        "id": 708,
        "category": "biz",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF ARTS (ECONOMICS AND SOCIOLOGY)",
        "cutoff": 18.831
    },
    {
        "id": 709,
        "category": "biz",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS & STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 710,
        "category": "biz",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS & STATISTICS",
        "cutoff": 32.118
    },
    {
        "id": 711,
        "category": "biz",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS & STATISTICS",
        "cutoff": 23.151
    },
    {
        "id": 712,
        "category": "biz",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ECONOMICS & STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 713,
        "category": "biz",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ECONOMICS & STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 714,
        "category": "biz",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS AND STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 715,
        "category": "biz",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS AND STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 716,
        "category": "biz",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF ECONOMICS AND STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 717,
        "category": "biz",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS AND STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 718,
        "category": "biz",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS AND STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 719,
        "category": "biz",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF ECONOMICS AND STATISTICS",
        "cutoff": 34.507
    },
    {
        "id": 720,
        "category": "biz",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS AND STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 721,
        "category": "biz",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS AND STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 722,
        "category": "biz",
        "school": "OPEN UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ECONOMICS AND STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 723,
        "category": "biz",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ECONOMICS & STATISTICS)",
        "cutoff": 24.112
    },
    {
        "id": 724,
        "category": "biz",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ECONOMICS & STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 725,
        "category": "biz",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ECONOMICS & STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 726,
        "category": "biz",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ECONOMICS & STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 727,
        "category": "biz",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ECONOMICS AND STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 728,
        "category": "biz",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ECONOMICS AND STATISTICS)",
        "cutoff": 18.831
    },
    {
        "id": 729,
        "category": "biz",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN APPLIED STATISTICS AND ECONOMICS",
        "cutoff": 23.543
    },
    {
        "id": 730,
        "category": "edu",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF ARTS (WITH EDUCATION)",
        "cutoff": 23.609
    },
    {
        "id": 731,
        "category": "edu",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF ARTS (WITH EDUCATION)",
        "cutoff": 25.129
    },
    {
        "id": 732,
        "category": "edu",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ARTS (WITH EDUCATION)",
        "cutoff": 23.469
    },
    {
        "id": 733,
        "category": "sci",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN NUTRITION AND DIETETICS",
        "cutoff": 25.282
    },
    {
        "id": 734,
        "category": "sci",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN NUTRITION AND DIETETICS",
        "cutoff": 15.864
    },
    {
        "id": 735,
        "category": "agri",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE IN FOODS, NUTRITION AND DIETETICS",
        "cutoff": 15.864
    },
    {
        "id": 736,
        "category": "med",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY NUTRITION AND HEALTH DEVELOPMENT",
        "cutoff": 15.864
    },
    {
        "id": 737,
        "category": "biz",
        "school": "KIRIRI WOMENS UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION",
        "cutoff": 21.375
    },
    {
        "id": 738,
        "category": "eng",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF BUSINESS AND INFORMATION TECHNOLOGY",
        "cutoff": 26.774
    },
    {
        "id": 739,
        "category": "eng",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF BUSINESS AND INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 740,
        "category": "eng",
        "school": "KIRIRI WOMENS UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF BUSINESS AND INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 741,
        "category": "eng",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 742,
        "category": "eng",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 743,
        "category": "eng",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE (COMPUTER TECHNOLOGY)",
        "cutoff": 31.181
    },
    {
        "id": 744,
        "category": "eng",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER TECHNOLOGY",
        "cutoff": 18.814
    },
    {
        "id": 745,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN COMPUTER TECHNOLOGY",
        "cutoff": 37.867
    },
    {
        "id": 746,
        "category": "eng",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SCIENCE & TECHNOLOGY)",
        "cutoff": 25.315
    },
    {
        "id": 747,
        "category": "sci",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (EARTH SCIENCE, WITH IT)",
        "cutoff": 15.683
    },
    {
        "id": 748,
        "category": "eng",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MANUFACTURING ENGINEERING & TECHNOLOGY)",
        "cutoff": 31.443
    },
    {
        "id": 749,
        "category": "eng",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN MECHANICAL AND MANUFACTURING ENGINEERING",
        "cutoff": 24.464
    },
    {
        "id": 750,
        "category": "agri",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ENVIRONMENTAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 751,
        "category": "agri",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF ENVIRONMENTAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 752,
        "category": "agri",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF ENVIRONMENTAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 753,
        "category": "agri",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ENVIRONMENTAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 754,
        "category": "agri",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ENVIRONMENTAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 755,
        "category": "agri",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF ENVIRONMENTAL STUDIES (SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 756,
        "category": "agri",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL SCIENCE, WITH IT)",
        "cutoff": 15.864
    },
    {
        "id": 757,
        "category": "agri",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL SCIENCE, WITH IT)",
        "cutoff": 15.864
    },
    {
        "id": 758,
        "category": "agri",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 759,
        "category": "agri",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 760,
        "category": "agri",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 761,
        "category": "agri",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 762,
        "category": "agri",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL SCIENCES)",
        "cutoff": 15.864
    },
    {
        "id": 763,
        "category": "agri",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 764,
        "category": "agri",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 765,
        "category": "agri",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL SCIENCE",
        "cutoff": 25.137
    },
    {
        "id": 766,
        "category": "agri",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 767,
        "category": "agri",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL STUDIES",
        "cutoff": 15.864
    },
    {
        "id": 768,
        "category": "agri",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE(ENVIRONMENTAL STUDIES)",
        "cutoff": 15.864
    },
    {
        "id": 769,
        "category": "agri",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF ENVIRONMENTAL STUDIES (COMMUNITY DEVELOPMENT)",
        "cutoff": 15.864
    },
    {
        "id": 770,
        "category": "eng",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL SCIENCE AND TECHNOLOGY",
        "cutoff": 15.864
    },
    {
        "id": 771,
        "category": "agri",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE ( AGRICULTURAL ECONOMICS AND RESOURCE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 772,
        "category": "agri",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE ( AGRICULTURAL ECONOMICS AND RESOURCE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 773,
        "category": "agri",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS & RESOURCE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 774,
        "category": "agri",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS & RESOURCE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 775,
        "category": "agri",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS & RESOURCE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 776,
        "category": "agri",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS AND RESOURCE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 777,
        "category": "agri",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS AND RESOURCE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 778,
        "category": "agri",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS AND RESOURCE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 779,
        "category": "agri",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE ECONOMICS &",
        "cutoff": 15.864
    },
    {
        "id": 780,
        "category": "agri",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE ( AGRICULTURAL ECONOMICS, WITH IT)",
        "cutoff": 15.864
    },
    {
        "id": 781,
        "category": "agri",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE ( AGRICULTURAL ECONOMICS, WITH IT)",
        "cutoff": 15.864
    },
    {
        "id": 782,
        "category": "agri",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS",
        "cutoff": 15.864
    },
    {
        "id": 783,
        "category": "agri",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS)",
        "cutoff": 15.864
    },
    {
        "id": 784,
        "category": "agri",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS)",
        "cutoff": 15.864
    },
    {
        "id": 785,
        "category": "agri",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL ECONOMICS)",
        "cutoff": 15.864
    },
    {
        "id": 786,
        "category": "agri",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURAL ECONOMICS",
        "cutoff": 15.864
    },
    {
        "id": 787,
        "category": "agri",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF AGRICULTURAL ECONOMICS AND MARKETING",
        "cutoff": 15.864
    },
    {
        "id": 788,
        "category": "eng",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (APPAREL & FASHION TECHNOLOGY)",
        "cutoff": 15.864
    },
    {
        "id": 789,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CLOTHING TEXTILE & INTERIOR DESIGN)",
        "cutoff": 23.553
    },
    {
        "id": 790,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FASHION DESIGN & MARKETING)",
        "cutoff": 26.002
    },
    {
        "id": 791,
        "category": "eng",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FASHION DESIGN AND TEXTILE TECHNOLOGY)",
        "cutoff": 15.864
    },
    {
        "id": 792,
        "category": "eng",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FASHION DESIGN AND TEXTILE TECHNOLOGY)",
        "cutoff": 15.864
    },
    {
        "id": 793,
        "category": "sci",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE (FASHION DESIGN AND TEXTILE",
        "cutoff": 15.864
    },
    {
        "id": 794,
        "category": "sci",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN FASHION DESIGN AND MARKETING",
        "cutoff": 15.864
    },
    {
        "id": 795,
        "category": "eng",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN TEXTILE TECHNOLOGY & APPLIED FASHION DESIGN",
        "cutoff": 15.864
    },
    {
        "id": 796,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (TEXTILE, FASHION DESIGN AND MERCHANDISING, WITH IT)",
        "cutoff": 15.864
    },
    {
        "id": 797,
        "category": "hosp",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF HOSPITALITY AND TOURISM MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 798,
        "category": "hosp",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HOSPITALITY & TOURISM",
        "cutoff": 29.608
    },
    {
        "id": 799,
        "category": "hosp",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HOSPITALITY & TOURISM",
        "cutoff": 24.772
    },
    {
        "id": 800,
        "category": "hosp",
        "school": "PRESBYTERIAN UNIVERSITY OF EAST AFRICA",
        "name": "BACHELOR OF SCIENCE (HOSPITALITY & TOURISM",
        "cutoff": 21.375
    },
    {
        "id": 801,
        "category": "hosp",
        "school": "GRETSA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HOSPITALITY AND TOURISM MANAGEMENT)",
        "cutoff": 21.375
    },
    {
        "id": 802,
        "category": "hosp",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HOSPITALITY AND TOURISM MANAGEMENT)",
        "cutoff": 23.996
    },
    {
        "id": 803,
        "category": "hosp",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HOSPITALITY AND TOURISM MANAGEMENT)",
        "cutoff": 21.375
    },
    {
        "id": 804,
        "category": "hosp",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (HOSPITALITY AND TOURISM",
        "cutoff": 25.531
    },
    {
        "id": 805,
        "category": "hosp",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SUSTAINABLE TOURISM AND HOSPITALITY",
        "cutoff": 25.03
    },
    {
        "id": 806,
        "category": "hosp",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF HOSPITALITY AND INSTITUTIONAL MANAGEMENT",
        "cutoff": 23.962
    },
    {
        "id": 807,
        "category": "hosp",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF HOTEL & HOSPITALITY MANAGEMENT",
        "cutoff": 24.844
    },
    {
        "id": 808,
        "category": "hosp",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF HOTEL AND HOSPITALITY MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 809,
        "category": "hosp",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF HOTEL AND HOSPITALITY MANAGEMENT",
        "cutoff": 23.369
    },
    {
        "id": 810,
        "category": "hosp",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF HOTEL AND HOSPITALITY MANAGEMENT",
        "cutoff": 23.319
    },
    {
        "id": 811,
        "category": "hosp",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF HOTELS AND HOSPITALITY MANAGEMENT",
        "cutoff": 23.329
    },
    {
        "id": 812,
        "category": "hosp",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF HOTELS AND HOSPITALITY MANAGEMENT",
        "cutoff": 26.074
    },
    {
        "id": 813,
        "category": "hosp",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF HOTELS AND HOSPITALITY MANAGEMENT",
        "cutoff": 26.119
    },
    {
        "id": 814,
        "category": "hosp",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ECO-TOURISM, HOTEL AND INSTITUTION MANAGEMENT, WITH IT)",
        "cutoff": 27.327
    },
    {
        "id": 815,
        "category": "hosp",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ECO-TOURISM, HOTEL AND INSTITUTION MANAGEMENT, WITH IT)",
        "cutoff": 21.375
    },
    {
        "id": 816,
        "category": "hosp",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ECOTOURISM & HOSPITALITY MANAGEMENT)",
        "cutoff": 27.305
    },
    {
        "id": 817,
        "category": "hosp",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ECOTOURISM",
        "cutoff": 24.837
    },
    {
        "id": 818,
        "category": "hosp",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF TOURISM AND HOSPITALITY MANAGEMENT",
        "cutoff": 22.999
    },
    {
        "id": 819,
        "category": "hosp",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ECOTOURISM AND HOSPITALITY MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 820,
        "category": "hosp",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 821,
        "category": "hosp",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 822,
        "category": "hosp",
        "school": "GRETSA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 823,
        "category": "hosp",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT",
        "cutoff": 27.515
    },
    {
        "id": 824,
        "category": "hosp",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN HOSPITALITY AND TOURISM",
        "cutoff": 23.506
    },
    {
        "id": 825,
        "category": "eng",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (BIOTECHNOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 826,
        "category": "eng",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOTECHNOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 827,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOTECHNOLOGY)",
        "cutoff": 25.602
    },
    {
        "id": 828,
        "category": "eng",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOTECHNOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 829,
        "category": "eng",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (BIOTECHNOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 830,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (BIOTECHNOLOGY)",
        "cutoff": 28.159
    },
    {
        "id": 831,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (BIOTECHNOLOGY)",
        "cutoff": 28.133
    },
    {
        "id": 832,
        "category": "agri",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF ENVIRONMENTAL STUDIES (COMMUNITY DEVELOPMENT)",
        "cutoff": 15.864
    },
    {
        "id": 833,
        "category": "agri",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ENVIRONMENTAL STUDIES AND COMMUNITY DEVELOPMENT",
        "cutoff": 15.864
    },
    {
        "id": 834,
        "category": "agri",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ENVIRONMENTAL STUDIES AND COMMUNITY",
        "cutoff": 15.864
    },
    {
        "id": 835,
        "category": "agri",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF ENVIRONMENTAL STUDIES",
        "cutoff": 15.864
    },
    {
        "id": 836,
        "category": "agri",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF ENVIRONMENTAL STUDIES (ARTS)",
        "cutoff": 15.864
    },
    {
        "id": 837,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (CONTROL AND INSTRUMENTATION)",
        "cutoff": 15.683
    },
    {
        "id": 838,
        "category": "eng",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)",
        "cutoff": 29.277
    },
    {
        "id": 839,
        "category": "eng",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)",
        "cutoff": 18.814
    },
    {
        "id": 840,
        "category": "eng",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)",
        "cutoff": 18.814
    },
    {
        "id": 841,
        "category": "eng",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)",
        "cutoff": 24.337
    },
    {
        "id": 842,
        "category": "eng",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)",
        "cutoff": 23.51
    },
    {
        "id": 843,
        "category": "eng",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)",
        "cutoff": 29.664
    },
    {
        "id": 844,
        "category": "eng",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)",
        "cutoff": 31.702
    },
    {
        "id": 845,
        "category": "eng",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)",
        "cutoff": 18.814
    },
    {
        "id": 846,
        "category": "eng",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 18.814
    },
    {
        "id": 847,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 29.323
    },
    {
        "id": 848,
        "category": "eng",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 21.468
    },
    {
        "id": 849,
        "category": "eng",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 31.768
    },
    {
        "id": 850,
        "category": "eng",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 26.283
    },
    {
        "id": 851,
        "category": "eng",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 30.177
    },
    {
        "id": 852,
        "category": "eng",
        "school": "AFRICA INTERNATIONAL UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 18.814
    },
    {
        "id": 853,
        "category": "eng",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 35.385
    },
    {
        "id": 854,
        "category": "eng",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 33.591
    },
    {
        "id": 855,
        "category": "eng",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 18.814
    },
    {
        "id": 856,
        "category": "eng",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 29.204
    },
    {
        "id": 857,
        "category": "eng",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 25.372
    },
    {
        "id": 858,
        "category": "eng",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 30.317
    },
    {
        "id": 859,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 39.851
    },
    {
        "id": 860,
        "category": "eng",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 29.619
    },
    {
        "id": 861,
        "category": "eng",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 18.814
    },
    {
        "id": 862,
        "category": "eng",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
        "cutoff": 22.998
    },
    {
        "id": 863,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (INFORMATION TECHNOLOGY)",
        "cutoff": 36.399
    },
    {
        "id": 864,
        "category": "it",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF LIBRARY & INFORMATION SCIENCE",
        "cutoff": 21.375
    },
    {
        "id": 865,
        "category": "it",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 21.375
    },
    {
        "id": 866,
        "category": "it",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF LIBRARY AND INFORMATION STUDIES",
        "cutoff": 21.375
    },
    {
        "id": 867,
        "category": "it",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 21.375
    },
    {
        "id": 868,
        "category": "it",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF SCIENCE IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 21.375
    },
    {
        "id": 869,
        "category": "it",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE  IN INFORMATION SCIENCE",
        "cutoff": 24.8
    },
    {
        "id": 870,
        "category": "it",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE  IN INFORMATION SCIENCE",
        "cutoff": 21.375
    },
    {
        "id": 871,
        "category": "sci",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN LIBRARY AND KNOWLEDGE",
        "cutoff": 21.375
    },
    {
        "id": 872,
        "category": "arts",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF TRAVEL & TOURS OPERATIONS MANAGEMENT",
        "cutoff": 23.068
    },
    {
        "id": 873,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF TRAVEL AND TOURS OPERATIONS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 874,
        "category": "arts",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF TRAVEL AND TOURS OPERATIONS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 875,
        "category": "arts",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF TRAVEL & TOURS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 876,
        "category": "hosp",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF INTERNATIONAL TOURISM MANAGEMENT",
        "cutoff": 23.39
    },
    {
        "id": 877,
        "category": "eng",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF INFORMATION TECHNOLOGY",
        "cutoff": 21.914
    },
    {
        "id": 878,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF INFORMATION TECHNOLOGY",
        "cutoff": 38.915
    },
    {
        "id": 879,
        "category": "eng",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF INFORMATION TECHNOLOGY",
        "cutoff": 22.751
    },
    {
        "id": 880,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF INFORMATION TECHNOLOGY",
        "cutoff": 26.696
    },
    {
        "id": 881,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS (PSYCHOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 882,
        "category": "arts",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ARTS (PSYCHOLOGY)",
        "cutoff": 29.717
    },
    {
        "id": 883,
        "category": "arts",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF ARTS (PSYCHOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 884,
        "category": "arts",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF ARTS (PSYCHOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 885,
        "category": "arts",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF ARTS (PSYCHOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 886,
        "category": "arts",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ARTS (PSYCHOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 887,
        "category": "eng",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF ARTS IN PSYCHOLOGY WITH TECHNOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 888,
        "category": "arts",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF PSYCHOLOGY",
        "cutoff": 27.232
    },
    {
        "id": 889,
        "category": "arts",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF PSYCHOLOGY",
        "cutoff": 24.829
    },
    {
        "id": 890,
        "category": "arts",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 891,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF PSYCHOLOGY ( WITH IT)",
        "cutoff": 24.074
    },
    {
        "id": 892,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNITY DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 893,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNITY DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 894,
        "category": "sci",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNITY DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 895,
        "category": "sci",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNITY DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 896,
        "category": "arts",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF COMMUNITY DEVELOPMENT",
        "cutoff": 22.449
    },
    {
        "id": 897,
        "category": "eng",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN MECHATRONIC ENGINEERING",
        "cutoff": 39.369
    },
    {
        "id": 898,
        "category": "eng",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN MECHATRONIC ENGINEERING",
        "cutoff": 36.535
    },
    {
        "id": 899,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN MECHATRONIC ENGINEERING",
        "cutoff": 43.232
    },
    {
        "id": 900,
        "category": "media",
        "school": "PRESBYTERIAN UNIVERSITY OF EAST AFRICA",
        "name": "BACHELOR OF ARTS IN MASS COMMUNICATION",
        "cutoff": 22.449
    },
    {
        "id": 901,
        "category": "media",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF MASS COMMUNICATION",
        "cutoff": 22.449
    },
    {
        "id": 902,
        "category": "media",
        "school": "AFRICA NAZARENE UNIVERSITY",
        "name": "BACHELOR OF MASS COMMUNICATION",
        "cutoff": 22.449
    },
    {
        "id": 903,
        "category": "media",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF MASS COMMUNICATION",
        "cutoff": 30.116
    },
    {
        "id": 904,
        "category": "media",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF ARTS IN JOURNALISM AND MASS",
        "cutoff": 22.449
    },
    {
        "id": 905,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (COMMUNITY DEVELOPMENT AND",
        "cutoff": 25.35
    },
    {
        "id": 906,
        "category": "eng",
        "school": "RIARA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 32.503
    },
    {
        "id": 907,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 908,
        "category": "eng",
        "school": "PAN AFRICA CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 909,
        "category": "eng",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 910,
        "category": "eng",
        "school": "AFRICA NAZARENE UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 25.254
    },
    {
        "id": 911,
        "category": "eng",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 912,
        "category": "eng",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 913,
        "category": "eng",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 914,
        "category": "eng",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 25.384
    },
    {
        "id": 915,
        "category": "eng",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 31.205
    },
    {
        "id": 916,
        "category": "eng",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 31.074
    },
    {
        "id": 917,
        "category": "eng",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 918,
        "category": "eng",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 26.523
    },
    {
        "id": 919,
        "category": "eng",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 27.359
    },
    {
        "id": 920,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 34.173
    },
    {
        "id": 921,
        "category": "eng",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 27.32
    },
    {
        "id": 922,
        "category": "eng",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 923,
        "category": "eng",
        "school": "THE EAST AFRICAN UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 924,
        "category": "media",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ELECTRICAL AND COMMUNICATION",
        "cutoff": 29.271
    },
    {
        "id": 925,
        "category": "eng",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ELECTRICAL AND TELECOMMUNICATION ENGINEERING",
        "cutoff": 30.939
    },
    {
        "id": 926,
        "category": "arts",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF PURCHASING & SUPPLIES MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 927,
        "category": "arts",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF PURCHASING & SUPPLIES MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 928,
        "category": "arts",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 929,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 930,
        "category": "arts",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 931,
        "category": "sci",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 932,
        "category": "sci",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 933,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 24.391
    },
    {
        "id": 934,
        "category": "arts",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF LOGISTICS AND SUPPLY CHAIN MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 935,
        "category": "biz",
        "school": "AFRICA NAZARENE UNIVERSITY",
        "name": "BACHELOR OF PROCUREMENT AND SUPPLY CHAIN",
        "cutoff": 21.375
    },
    {
        "id": 936,
        "category": "biz",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF PROCUREMENT AND SUPPLY CHAIN",
        "cutoff": 21.375
    },
    {
        "id": 937,
        "category": "biz",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF PROCUREMENT AND SUPPLY CHAIN",
        "cutoff": 21.375
    },
    {
        "id": 938,
        "category": "sci",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (GEOGRAPHY)",
        "cutoff": 18.144
    },
    {
        "id": 939,
        "category": "biz",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN GEOGRAPHY AND ECONOMICS",
        "cutoff": 22.56
    },
    {
        "id": 940,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (ANIMAL SCIENCE & MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 941,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ANIMAL SCIENCE & MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 942,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ANIMAL SCIENCE, WITH IT)",
        "cutoff": 15.864
    },
    {
        "id": 943,
        "category": "sci",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ANIMAL SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 944,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ANIMAL SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 945,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ANIMAL SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 946,
        "category": "sci",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ANIMAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 947,
        "category": "sci",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ANIMAL SCIENCE",
        "cutoff": 15.864
    },
    {
        "id": 948,
        "category": "med",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ANIMAL HEALTH & PRODUCTION)",
        "cutoff": 15.864
    },
    {
        "id": 949,
        "category": "med",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ANIMAL HEALTH AND PRODUCTION)",
        "cutoff": 24.972
    },
    {
        "id": 950,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (INTERNATIONAL RELATIONS AND DIPLOMACY ,WITH IT)",
        "cutoff": 24.178
    },
    {
        "id": 951,
        "category": "arts",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ARTS (INTERNATIONAL RELATIONS AND DIPLOMACY)",
        "cutoff": 34.222
    },
    {
        "id": 952,
        "category": "arts",
        "school": "RIARA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN INTERNATIONAL RELATIONS AND DIPLOMACY",
        "cutoff": 32.245
    },
    {
        "id": 953,
        "category": "arts",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF ARTS IN INTERNATIONAL RELATIONS",
        "cutoff": 22.449
    },
    {
        "id": 954,
        "category": "arts",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF ARTS IN INTERNATIONAL RELATIONS",
        "cutoff": 22.449
    },
    {
        "id": 955,
        "category": "arts",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF ARTS IN INTERNATIONAL RELATIONS",
        "cutoff": 22.449
    },
    {
        "id": 956,
        "category": "arts",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN INTERNATIONAL RELATIONS",
        "cutoff": 26.341
    },
    {
        "id": 957,
        "category": "arts",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ARTS IN INTERNATIONAL RELATIONS",
        "cutoff": 22.449
    },
    {
        "id": 958,
        "category": "arts",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF ARTS IN INTERNATIONAL RELATIONS AND DIPLOMACY",
        "cutoff": 22.449
    },
    {
        "id": 959,
        "category": "arts",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF ARTS IN INTERNATIONAL STUDIES",
        "cutoff": 32.167
    },
    {
        "id": 960,
        "category": "arts",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF ENTREPRENEURSHIP",
        "cutoff": 21.375
    },
    {
        "id": 961,
        "category": "sci",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (ENTREPRENEURSHIP AND SMALL ENTERPRISES MANAGEMENT)",
        "cutoff": 21.375
    },
    {
        "id": 962,
        "category": "sci",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ENTREPRENEURSHIP",
        "cutoff": 21.375
    },
    {
        "id": 963,
        "category": "arts",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF ENTREPRENEURSHIP AND ENTERPRISE MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 964,
        "category": "biz",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF ENTREPRENEURSHIP AND SMALL BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 965,
        "category": "biz",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF ENTREPRENUERSHIP & SMALL BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 966,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENTREPRENEURSHIP STUDIES)",
        "cutoff": 21.375
    },
    {
        "id": 967,
        "category": "sci",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (ENTREPRENEURSHIP STUDIES)",
        "cutoff": 21.375
    },
    {
        "id": 968,
        "category": "sci",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENTREPRENEURSHIP)",
        "cutoff": 21.375
    },
    {
        "id": 969,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (ENTREPRENEURSHIP)",
        "cutoff": 21.375
    },
    {
        "id": 970,
        "category": "sci",
        "school": "AFRICA INTERNATIONAL UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENTREPRENEURSHIP",
        "cutoff": 21.375
    },
    {
        "id": 971,
        "category": "sci",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENTREPRENEURSHIP",
        "cutoff": 21.375
    },
    {
        "id": 972,
        "category": "biz",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF BUSINESS ENTREPRENEURSHIP , WITH IT",
        "cutoff": 21.375
    },
    {
        "id": 973,
        "category": "arts",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF ENTREPRENUERSHIP AND ENTERPRISE MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 974,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ENTREPRENUERSHIP AND MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 975,
        "category": "biz",
        "school": "OPEN UNIVERSITY OF KENYA",
        "name": "BACHELOR OF BUSINESS AND ENTREPRENEURSHIP",
        "cutoff": 21.375
    },
    {
        "id": 976,
        "category": "arts",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF REAL ESTATE",
        "cutoff": 33.529
    },
    {
        "id": 977,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (REAL ESTATE)",
        "cutoff": 32.041
    },
    {
        "id": 978,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (PROPERTY MANAGEMENT AND REAL ESTATE)",
        "cutoff": 29.49
    },
    {
        "id": 979,
        "category": "eng",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF BUSINESS MANAGEMENT AND INFORMATION TECHNOLOGY",
        "cutoff": 21.375
    },
    {
        "id": 980,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS (GENDER AND DEVELOPMENT STUDIES)",
        "cutoff": 22.449
    },
    {
        "id": 981,
        "category": "arts",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ARTS (GENDER AND DEVELOPMENT STUDIES)",
        "cutoff": 22.449
    },
    {
        "id": 982,
        "category": "arts",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF ARTS (GENDER AND DEVELOPMENT STUDIES)",
        "cutoff": 22.449
    },
    {
        "id": 983,
        "category": "arts",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF ARTS (GENDER AND DEVELOPMENT)",
        "cutoff": 22.449
    },
    {
        "id": 984,
        "category": "arts",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS (GENDER AND SOCIAL STUDIES)",
        "cutoff": 22.449
    },
    {
        "id": 985,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (DEVELOPMENT STUDIES, WITH IT)",
        "cutoff": 22.449
    },
    {
        "id": 986,
        "category": "arts",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF ARTS (DEVELOPMENT STUDIES, WITH IT)",
        "cutoff": 22.449
    },
    {
        "id": 987,
        "category": "arts",
        "school": "MANAGEMENT UNIVERSITY OF AFRICA",
        "name": "BACHELOR OF ARTS IN DEVELOPMENT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 988,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS IN DEVELOPMENT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 989,
        "category": "arts",
        "school": "AFRICA INTERNATIONAL UNIVERSITY",
        "name": "BACHELOR OF ARTS IN DEVELOPMENT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 990,
        "category": "arts",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF ARTS IN DEVELOPMENT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 991,
        "category": "arts",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ARTS IN DEVELOPMENT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 992,
        "category": "arts",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF DEVELOPMENT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 993,
        "category": "arts",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF DEVELOPMENT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 994,
        "category": "arts",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF DEVELOPMENT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 995,
        "category": "arts",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF ARTS IN DEVELOPMENT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 996,
        "category": "arts",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF DEVELOPMENT STUDIES WITH IT",
        "cutoff": 22.449
    },
    {
        "id": 997,
        "category": "it",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS & COMPUTER SCIENCE)",
        "cutoff": 35.087
    },
    {
        "id": 998,
        "category": "it",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS & COMPUTER SCIENCE)",
        "cutoff": 24.314
    },
    {
        "id": 999,
        "category": "it",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS & COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 1000,
        "category": "it",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS & COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 1001,
        "category": "it",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS AND COMPUTER",
        "cutoff": 18.814
    },
    {
        "id": 1002,
        "category": "it",
        "school": "TAITA TAVETA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS AND COMPUTER",
        "cutoff": 18.814
    },
    {
        "id": 1003,
        "category": "it",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS AND COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 1004,
        "category": "it",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (MATHEMATICS AND COMPUTER SCIENCE)",
        "cutoff": 18.814
    },
    {
        "id": 1005,
        "category": "it",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN MATHEMATICS & COMPUTER SCIENCE",
        "cutoff": 18.814
    },
    {
        "id": 1006,
        "category": "it",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN MATHEMATICS AND COMPUTER SCIENCE",
        "cutoff": 28.885
    },
    {
        "id": 1007,
        "category": "it",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN MATHEMATICS AND COMPUTER SCIENCE",
        "cutoff": 36.724
    },
    {
        "id": 1008,
        "category": "it",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SCIENCE AND MATHEMATICS",
        "cutoff": 18.814
    },
    {
        "id": 1009,
        "category": "it",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE MATHEMATICS AND COMPUTER",
        "cutoff": 18.814
    },
    {
        "id": 1010,
        "category": "edu",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION ARTS (HOME ECONOMICS)",
        "cutoff": 27.429
    },
    {
        "id": 1011,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (INDUSTRIAL MATHEMATICS)",
        "cutoff": 18.831
    },
    {
        "id": 1012,
        "category": "agri",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ARTS IN ENVIRONMENTAL PLANNING AND",
        "cutoff": 15.864
    },
    {
        "id": 1013,
        "category": "agri",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ENVIRONMENTAL PLANNING & MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1014,
        "category": "agri",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF ENVIRONMENTAL PLANNING & MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1015,
        "category": "agri",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF ENVIRONMENTAL PLANNING & MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1016,
        "category": "agri",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL ECONOMICS AND POLICY",
        "cutoff": 15.864
    },
    {
        "id": 1017,
        "category": "agri",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ENVIRONMENTAL MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 1018,
        "category": "edu",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION (PHYSICAL EDUCATION)",
        "cutoff": 21.858
    },
    {
        "id": 1019,
        "category": "edu",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (PHYSICAL EDUCATION)",
        "cutoff": 21.858
    },
    {
        "id": 1020,
        "category": "edu",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF EDUCATION IN PHYSICAL EDUCATION AND RECREATION",
        "cutoff": 21.858
    },
    {
        "id": 1021,
        "category": "edu",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF EDUCATION (PHYSICAL EDUCATION AND SPORTS)",
        "cutoff": 21.858
    },
    {
        "id": 1022,
        "category": "edu",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION IN TECHNOLOGY (MECHANICAL",
        "cutoff": 27.517
    },
    {
        "id": 1023,
        "category": "edu",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION IN TECHNOLOGY",
        "cutoff": 25.753
    },
    {
        "id": 1024,
        "category": "edu",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION TECHNOLOGY (MECHANICAL",
        "cutoff": 15.683
    },
    {
        "id": 1025,
        "category": "edu",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION IN TECHNOLOGY (ELECTRICAL &",
        "cutoff": 25.702
    },
    {
        "id": 1026,
        "category": "edu",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF EDUCATION (GUIDANCE AND COUNSELLING)",
        "cutoff": 24.411
    },
    {
        "id": 1027,
        "category": "edu",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF EDUCATION WITH GUIDANCE AND COUNSELLING",
        "cutoff": 23.873
    },
    {
        "id": 1028,
        "category": "arts",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF PROJECT PLANNING AND MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 1029,
        "category": "arts",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF PROJECT PLANNING AND MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 1030,
        "category": "arts",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF PROJECT PLANNING AND MANAGEMENT",
        "cutoff": 30.644
    },
    {
        "id": 1031,
        "category": "arts",
        "school": "KOITALEEL SAMOEI UNIVERSITY COLLEGE",
        "name": "BACHELOR OF PROJECT PLANNING AND MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 1032,
        "category": "sci",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PROJECT PLANNING AND",
        "cutoff": 21.375
    },
    {
        "id": 1033,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PROJECT PLANNING AND",
        "cutoff": 22.69
    },
    {
        "id": 1034,
        "category": "sci",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (PROJECT PLANNING AND",
        "cutoff": 21.375
    },
    {
        "id": 1035,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (PROJECT PLANNING MANAGEMENT)",
        "cutoff": 21.375
    },
    {
        "id": 1036,
        "category": "sci",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PROJECT PLANNING MANAGEMENT)",
        "cutoff": 25.695
    },
    {
        "id": 1037,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF PROJECT MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 1038,
        "category": "arts",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF PROJECT MANAGEMENT",
        "cutoff": 28.76
    },
    {
        "id": 1039,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (FORESTRY)",
        "cutoff": 15.864
    },
    {
        "id": 1040,
        "category": "sci",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (FORESTRY)",
        "cutoff": 15.864
    },
    {
        "id": 1041,
        "category": "edu",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF EDUCATION (TECHNOLOGY EDUCATION)",
        "cutoff": 15.683
    },
    {
        "id": 1042,
        "category": "edu",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (TECHNOLOGY EDUCATION)",
        "cutoff": 15.683
    },
    {
        "id": 1043,
        "category": "edu",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF TECHNICAL EDUCATION",
        "cutoff": 15.683
    },
    {
        "id": 1044,
        "category": "edu",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE) WITH SPECIAL NEEDS EDUCATION",
        "cutoff": 24.237
    },
    {
        "id": 1045,
        "category": "edu",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SCIENCE) WITH GUIDANCE AND COUNSELING",
        "cutoff": 23.049
    },
    {
        "id": 1046,
        "category": "biz",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN FINANCIAL ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 1047,
        "category": "biz",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF  FINANCIAL ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 1048,
        "category": "arts",
        "school": "AFRICA NAZARENE UNIVERSITY",
        "name": "BACHELOR OF ARTS (COUNSELLING PSYCHOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 1049,
        "category": "arts",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF ARTS (COUNSELLING PSYCHOLOGY)",
        "cutoff": 24.615
    },
    {
        "id": 1050,
        "category": "arts",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF ARTS (COUNSELLING PSYCHOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 1051,
        "category": "arts",
        "school": "PAN AFRICA CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1052,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1053,
        "category": "arts",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1054,
        "category": "arts",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1055,
        "category": "arts",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1056,
        "category": "arts",
        "school": "AFRICA INTERNATIONAL UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1057,
        "category": "arts",
        "school": "TANGAZA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1058,
        "category": "arts",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ARTS IN COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1059,
        "category": "arts",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF ARTS IN COUNSELLING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1060,
        "category": "arts",
        "school": "INTERNATIONAL LEADERSHIP UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COUNSELLING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1061,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COUNSELLING PSYCHOLOGY)",
        "cutoff": 24.041
    },
    {
        "id": 1062,
        "category": "sci",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (COUNSELLING PSYCHOLOGY)",
        "cutoff": 22.449
    },
    {
        "id": 1063,
        "category": "arts",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ARTS (COUNSELLING)",
        "cutoff": 24.094
    },
    {
        "id": 1064,
        "category": "arts",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF ARTS IN  PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1065,
        "category": "arts",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF ARTS IN COUNSELING",
        "cutoff": 22.449
    },
    {
        "id": 1066,
        "category": "arts",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF URBAN AND REGIONAL PLANNING",
        "cutoff": 18.392
    },
    {
        "id": 1067,
        "category": "biz",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF ARTS (HISTORY & ECONOMICS)",
        "cutoff": 18.831
    },
    {
        "id": 1068,
        "category": "biz",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN HISTORY AND ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 1069,
        "category": "eng",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (DAIRY TECHNOLOGY & MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 1070,
        "category": "agri",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE & HUMAN ECOLOGY EXTENSION)",
        "cutoff": 15.864
    },
    {
        "id": 1071,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED AQUATIC SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 1072,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (APPLIED AQUATIC SCIENCE)",
        "cutoff": 15.864
    },
    {
        "id": 1073,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (NATURAL RESOURCE MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 1074,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (NATURAL RESOURCES MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 1075,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (NATURAL RESOURCES MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 1076,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (NATURAL RESOURCES MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 1077,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN NATURAL RESOURCE MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1078,
        "category": "sci",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE IN NATURAL RESOURCE MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1079,
        "category": "edu",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (HOME SCIENCE , WITH IT)",
        "cutoff": 28.055
    },
    {
        "id": 1080,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (PHYSICS WITH APPROPRIATE",
        "cutoff": 15.683
    },
    {
        "id": 1081,
        "category": "eng",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PHYSICS WITH APPROPRIATE TECHNOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 1082,
        "category": "sci",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PHYSICS)",
        "cutoff": 15.683
    },
    {
        "id": 1083,
        "category": "sci",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PHYSICS)",
        "cutoff": 15.683
    },
    {
        "id": 1084,
        "category": "sci",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PHYSICS)",
        "cutoff": 15.683
    },
    {
        "id": 1085,
        "category": "sci",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PHYSICS)",
        "cutoff": 15.683
    },
    {
        "id": 1086,
        "category": "sci",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF SCIENCE (PHYSICS)",
        "cutoff": 15.683
    },
    {
        "id": 1087,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PHYSICS, WITH IT)",
        "cutoff": 15.683
    },
    {
        "id": 1088,
        "category": "sci",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PHYSICS, WITH IT)",
        "cutoff": 15.683
    },
    {
        "id": 1089,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN PHYSICS",
        "cutoff": 15.683
    },
    {
        "id": 1090,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN PHYSICS",
        "cutoff": 15.683
    },
    {
        "id": 1091,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (SUGAR AND AGRO PROCESSING",
        "cutoff": 15.864
    },
    {
        "id": 1092,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (EMERGENCY MANAGEMENT &",
        "cutoff": 22.449
    },
    {
        "id": 1093,
        "category": "arch",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE (LAND ADMINISTRATION)",
        "cutoff": 22.582
    },
    {
        "id": 1094,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (DESIGN)",
        "cutoff": 25.621
    },
    {
        "id": 1095,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (GEOPHYSICS)",
        "cutoff": 15.683
    },
    {
        "id": 1096,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (GEOINFORMATION TECHNOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 1097,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (NUTRITION AND DIETETICS)",
        "cutoff": 25.924
    },
    {
        "id": 1098,
        "category": "edu",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)",
        "cutoff": 21.858
    },
    {
        "id": 1099,
        "category": "edu",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)",
        "cutoff": 23.619
    },
    {
        "id": 1100,
        "category": "edu",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL EDUCATION AND EXTENSION)",
        "cutoff": 26.761
    },
    {
        "id": 1101,
        "category": "edu",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURAL EXTENSION AND EDUCATION)",
        "cutoff": 24.326
    },
    {
        "id": 1102,
        "category": "edu",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE EDUCATION &",
        "cutoff": 23.795
    },
    {
        "id": 1103,
        "category": "edu",
        "school": "THARAKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE EDUCATION &",
        "cutoff": 21.858
    },
    {
        "id": 1104,
        "category": "edu",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE EDUCATION AND EXTENSION, WITH IT)",
        "cutoff": 24.692
    },
    {
        "id": 1105,
        "category": "edu",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE EDUCATION AND EXTENSION, WITH IT)",
        "cutoff": 21.858
    },
    {
        "id": 1106,
        "category": "edu",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (AGRICULTURE EDUCATION AND EXTENSION)",
        "cutoff": 21.858
    },
    {
        "id": 1107,
        "category": "edu",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURAL EDUCATION & EXTENSION",
        "cutoff": 23.556
    },
    {
        "id": 1108,
        "category": "edu",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURAL EDUCATION & EXTENSION",
        "cutoff": 21.858
    },
    {
        "id": 1109,
        "category": "edu",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN AGRICULTURAL EDUCATION & EXTENSION",
        "cutoff": 21.858
    },
    {
        "id": 1110,
        "category": "edu",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE WITH EDUCATION",
        "cutoff": 21.858
    },
    {
        "id": 1111,
        "category": "edu",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE WITH EDUCATION",
        "cutoff": 21.858
    },
    {
        "id": 1112,
        "category": "edu",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE WITH EDUCATION",
        "cutoff": 21.858
    },
    {
        "id": 1113,
        "category": "sci",
        "school": "EGERTON UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INTEGRATED FOREST RESOURCES MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 1114,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (CROP PROTECTION)",
        "cutoff": 15.864
    },
    {
        "id": 1115,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (CROP PROTECTION)",
        "cutoff": 15.864
    },
    {
        "id": 1116,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CROP IMPROVEMENT & PROTECTION)",
        "cutoff": 15.864
    },
    {
        "id": 1117,
        "category": "med",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNITY HEALTH &",
        "cutoff": 15.864
    },
    {
        "id": 1118,
        "category": "med",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (COMMUNITY HEALTH &",
        "cutoff": 26.463
    },
    {
        "id": 1119,
        "category": "med",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (COMMUNITY HEALTH &",
        "cutoff": 15.864
    },
    {
        "id": 1120,
        "category": "med",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (COMMUNITY HEALTH AND",
        "cutoff": 15.864
    },
    {
        "id": 1121,
        "category": "med",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH",
        "cutoff": 24.706
    },
    {
        "id": 1122,
        "category": "med",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH",
        "cutoff": 15.864
    },
    {
        "id": 1123,
        "category": "med",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH",
        "cutoff": 29.458
    },
    {
        "id": 1124,
        "category": "med",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH",
        "cutoff": 15.864
    },
    {
        "id": 1125,
        "category": "med",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH",
        "cutoff": 24.02
    },
    {
        "id": 1126,
        "category": "med",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH AND DEVELOPMENT",
        "cutoff": 24.064
    },
    {
        "id": 1127,
        "category": "med",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH AND DEVELOPMENT",
        "cutoff": 25.523
    },
    {
        "id": 1128,
        "category": "med",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH AND",
        "cutoff": 24.867
    },
    {
        "id": 1129,
        "category": "med",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH AND DEVELOPMENT",
        "cutoff": 15.864
    },
    {
        "id": 1130,
        "category": "med",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH AND DEVELOPMENT",
        "cutoff": 15.864
    },
    {
        "id": 1131,
        "category": "med",
        "school": "AMREF INTERNATIONAL UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMMUNITY HEALTH PRACTICE",
        "cutoff": 15.864
    },
    {
        "id": 1132,
        "category": "eng",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF TECHNOLOGY (TECHNICAL AND APPLIED",
        "cutoff": 15.683
    },
    {
        "id": 1133,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (INDUSTRIAL AND APPLIED CHEMISTRY)",
        "cutoff": 25.448
    },
    {
        "id": 1134,
        "category": "it",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATICS)",
        "cutoff": 18.814
    },
    {
        "id": 1135,
        "category": "it",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (INFORMATICS)",
        "cutoff": 18.814
    },
    {
        "id": 1136,
        "category": "it",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE IN INFORMATICS",
        "cutoff": 18.814
    },
    {
        "id": 1137,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (EXERCISE & SPORT SCIENCE)",
        "cutoff": 19.92
    },
    {
        "id": 1138,
        "category": "arts",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SPORTS MANAGEMENT",
        "cutoff": 19.92
    },
    {
        "id": 1139,
        "category": "sci",
        "school": "LAIKIPIA UNIVERSITY",
        "name": "BACHELOR OF SPORTS SCIENCE & MANAGEMENT",
        "cutoff": 19.92
    },
    {
        "id": 1140,
        "category": "med",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HEALTH PROMOTION)",
        "cutoff": 19.92
    },
    {
        "id": 1141,
        "category": "med",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (HEALTH PROMOTION AND SPORTS SCIENCE)",
        "cutoff": 19.92
    },
    {
        "id": 1142,
        "category": "sci",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY AND MOLECULAR BIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 1143,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (BIOCHEMISTRY AND MOLECULAR",
        "cutoff": 31.058
    },
    {
        "id": 1144,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MOLECULAR & CELLULAR BIOLOGY)",
        "cutoff": 15.683
    },
    {
        "id": 1145,
        "category": "edu",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF EDUCATION TECHNOLOGY (COMPUTER STUDIES)",
        "cutoff": 15.683
    },
    {
        "id": 1146,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (RELIGION, WITH IT)",
        "cutoff": 20.93
    },
    {
        "id": 1147,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS (RELIGIOUS STUDIES)",
        "cutoff": 20.93
    },
    {
        "id": 1148,
        "category": "arts",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF ARTS (RELIGIOUS STUDIES)",
        "cutoff": 20.93
    },
    {
        "id": 1149,
        "category": "arts",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ARTS (RELIGIOUS STUDIES)",
        "cutoff": 20.93
    },
    {
        "id": 1150,
        "category": "arts",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN RELIGIOUS STUDIES",
        "cutoff": 20.93
    },
    {
        "id": 1151,
        "category": "arts",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF ARTS IN THEOLOGY",
        "cutoff": 20.93
    },
    {
        "id": 1152,
        "category": "arts",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF ARTS IN THEOLOGY",
        "cutoff": 20.93
    },
    {
        "id": 1153,
        "category": "arts",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF THEOLOGY",
        "cutoff": 20.93
    },
    {
        "id": 1154,
        "category": "arts",
        "school": "PRESBYTERIAN UNIVERSITY OF EAST AFRICA",
        "name": "BACHELOR OF THEOLOGY",
        "cutoff": 20.93
    },
    {
        "id": 1155,
        "category": "arts",
        "school": "INTERNATIONAL LEADERSHIP UNIVERSITY",
        "name": "BACHELOR OF THEOLOGY",
        "cutoff": 20.93
    },
    {
        "id": 1156,
        "category": "arts",
        "school": "KENYA HIGHLANDS EVANGELICAL UNIVERSITY",
        "name": "BACHELOR OF ARTS IN PASTORAL THEOLOGY",
        "cutoff": 20.93
    },
    {
        "id": 1157,
        "category": "arts",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "BACHELOR OF ARTS IN PASTORAL THEOLOGY",
        "cutoff": 20.93
    },
    {
        "id": 1158,
        "category": "arts",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF DIVINITY",
        "cutoff": 20.93
    },
    {
        "id": 1159,
        "category": "arts",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF THEOLOGY IN PASTORAL STUDIES",
        "cutoff": 20.93
    },
    {
        "id": 1160,
        "category": "biz",
        "school": "PAN AFRICA CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF BUSINESS LEADERSHIP",
        "cutoff": 21.375
    },
    {
        "id": 1161,
        "category": "eng",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE IN AUTOMOTIVE TECHNOLOGY",
        "cutoff": 15.683
    },
    {
        "id": 1162,
        "category": "arts",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF ARTS IN LEADERSHIP AND MANAGEMENT",
        "cutoff": 22.449
    },
    {
        "id": 1163,
        "category": "arts",
        "school": "INTERNATIONAL LEADERSHIP UNIVERSITY",
        "name": "BACHELOR OF ARTS IN LEADERSHIP AND MANAGEMENT",
        "cutoff": 22.449
    },
    {
        "id": 1164,
        "category": "arts",
        "school": "TANGAZA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN LEADERSHIP AND MANAGEMENT",
        "cutoff": 22.449
    },
    {
        "id": 1165,
        "category": "arts",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "BACHELOR OF LEADERSHIP AND MANAGEMENT",
        "cutoff": 22.449
    },
    {
        "id": 1166,
        "category": "arts",
        "school": "MANAGEMENT UNIVERSITY OF AFRICA",
        "name": "BACHELOR OF MANAGEMENT AND LEADERSHIP",
        "cutoff": 22.449
    },
    {
        "id": 1167,
        "category": "arts",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF ARTS IN PHILOSOPHY AND LEADERSHIP STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 1168,
        "category": "media",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF COMMUNICATION AND MEDIA STUDIES",
        "cutoff": 24.307
    },
    {
        "id": 1169,
        "category": "media",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF COMMUNICATION AND MEDIA STUDIES",
        "cutoff": 29.649
    },
    {
        "id": 1170,
        "category": "media",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN MEDIA AND DIGITAL",
        "cutoff": 22.449
    },
    {
        "id": 1171,
        "category": "media",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF COMMUNICATION AND PUBLIC RELATIONS",
        "cutoff": 22.449
    },
    {
        "id": 1172,
        "category": "media",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNICATION AND PUBLIC RELATIONS)",
        "cutoff": 22.449
    },
    {
        "id": 1173,
        "category": "media",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (COMMUNICATION AND PUBLIC RELATIONS)",
        "cutoff": 22.449
    },
    {
        "id": 1174,
        "category": "media",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNICATION AND PUBLIC RELATIONS)",
        "cutoff": 22.449
    },
    {
        "id": 1175,
        "category": "media",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COMMUNICATION AND PUBLIC RELATIONS)",
        "cutoff": 22.449
    },
    {
        "id": 1176,
        "category": "it",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (COMPUTER SECURITY AND FORENSICS)",
        "cutoff": 18.814
    },
    {
        "id": 1177,
        "category": "it",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SECURITY AND",
        "cutoff": 18.814
    },
    {
        "id": 1178,
        "category": "it",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN COMPUTER SECURITY AND",
        "cutoff": 18.814
    },
    {
        "id": 1179,
        "category": "it",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INFORMATION SECURITY AND FORENSICS",
        "cutoff": 18.814
    },
    {
        "id": 1180,
        "category": "it",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CLOUD COMPUTING AND INFORMATION SECURITY)",
        "cutoff": 25.586
    },
    {
        "id": 1181,
        "category": "sci",
        "school": "OPEN UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN CYBER SECURITY AND DIGITAL FORENSICS",
        "cutoff": 18.814
    },
    {
        "id": 1182,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (RENEWABLE ENERGY AND",
        "cutoff": 15.683
    },
    {
        "id": 1183,
        "category": "sci",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 1184,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 1185,
        "category": "sci",
        "school": "KIBABII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 1186,
        "category": "sci",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 1187,
        "category": "sci",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 1188,
        "category": "sci",
        "school": "UNIVERSITY OF NAIROBI",
        "name": "BACHELOR OF SCIENCE (CHEMISTRY)",
        "cutoff": 21.213
    },
    {
        "id": 1189,
        "category": "sci",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 1190,
        "category": "sci",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF SCIENCE (CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 1191,
        "category": "sci",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE IN CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 1192,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN  CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 1193,
        "category": "sci",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN  POLYMER CHEMISTRY",
        "cutoff": 15.683
    },
    {
        "id": 1194,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FISHERIES AND NATURAL RESOURCES, WITH IT)",
        "cutoff": 15.864
    },
    {
        "id": 1195,
        "category": "sci",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF SCIENCE (FISHERIES & AQUATIC SCIENCES)",
        "cutoff": 15.864
    },
    {
        "id": 1196,
        "category": "sci",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN FISHERIES AND AQUACULTURE",
        "cutoff": 15.864
    },
    {
        "id": 1197,
        "category": "eng",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (AQUACULTURE AND FISHERIES TECHNOLOGY)",
        "cutoff": 15.864
    },
    {
        "id": 1198,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN AQUACULTURE TECHNOLOGY",
        "cutoff": 15.864
    },
    {
        "id": 1199,
        "category": "sci",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN AQUACULTURE AND FISHERIES MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1200,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN FISHERIES AND AQUACULTURE",
        "cutoff": 15.864
    },
    {
        "id": 1201,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN FISHERIES AND AQUACULTURE",
        "cutoff": 15.864
    },
    {
        "id": 1202,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN FISHERIES AND AQUACULTURE",
        "cutoff": 15.864
    },
    {
        "id": 1203,
        "category": "eng",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF TECHNOLOGY IN MECHANICAL ENGINEERING",
        "cutoff": 27.103
    },
    {
        "id": 1204,
        "category": "biz",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (BUSINESS COMPUTING)",
        "cutoff": 25.731
    },
    {
        "id": 1205,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF TECHNOLOGY IN MARINE ENGINEERING",
        "cutoff": 33.022
    },
    {
        "id": 1206,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF PHILOSOPHY IN  TECHNOLOGY (SURVEYING TECHNOLOGY)",
        "cutoff": 18.392
    },
    {
        "id": 1207,
        "category": "sci",
        "school": "KOITALEEL SAMOEI UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (FINANCE)",
        "cutoff": 18.831
    },
    {
        "id": 1208,
        "category": "biz",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS & FINANCE",
        "cutoff": 32.698
    },
    {
        "id": 1209,
        "category": "biz",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS AND FINANCE",
        "cutoff": 18.831
    },
    {
        "id": 1210,
        "category": "biz",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF ECONOMICS AND FINANCE",
        "cutoff": 18.831
    },
    {
        "id": 1211,
        "category": "biz",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS AND FINANCE",
        "cutoff": 18.831
    },
    {
        "id": 1212,
        "category": "biz",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF ECONOMICS AND FINANCE",
        "cutoff": 18.831
    },
    {
        "id": 1213,
        "category": "biz",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ECONOMICS AND FINANCE",
        "cutoff": 18.831
    },
    {
        "id": 1214,
        "category": "biz",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ECONOMICS AND FINANCE",
        "cutoff": 18.831
    },
    {
        "id": 1215,
        "category": "sci",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN BANKING AND FINANCE",
        "cutoff": 22.748
    },
    {
        "id": 1216,
        "category": "sci",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN BANKING AND FINANCE",
        "cutoff": 28.368
    },
    {
        "id": 1217,
        "category": "sci",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE (FINANCE)",
        "cutoff": 18.831
    },
    {
        "id": 1218,
        "category": "sci",
        "school": "UNIVERSITY OF EMBU",
        "name": "BACHELOR OF SCIENCE (FINANCE)",
        "cutoff": 18.831
    },
    {
        "id": 1219,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN FINANCE",
        "cutoff": 18.831
    },
    {
        "id": 1220,
        "category": "eng",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING",
        "cutoff": 33.884
    },
    {
        "id": 1221,
        "category": "eng",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING",
        "cutoff": 40.162
    },
    {
        "id": 1222,
        "category": "eng",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING",
        "cutoff": 36.957
    },
    {
        "id": 1223,
        "category": "eng",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING",
        "cutoff": 41.368
    },
    {
        "id": 1224,
        "category": "eng",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING",
        "cutoff": 25.573
    },
    {
        "id": 1225,
        "category": "eng",
        "school": "MURANG'A UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING",
        "cutoff": 38.437
    },
    {
        "id": 1226,
        "category": "eng",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING",
        "cutoff": 18.814
    },
    {
        "id": 1227,
        "category": "it",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN SOFTWARE DEVELOPMENT",
        "cutoff": 24.055
    },
    {
        "id": 1228,
        "category": "med",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HEALTH RECORDS & INFORMATION MGT.)",
        "cutoff": 28.672
    },
    {
        "id": 1229,
        "category": "med",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (HEALTH RECORDS & INFORMATION MGT.)",
        "cutoff": 24.064
    },
    {
        "id": 1230,
        "category": "med",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (HEALTH RECORDS AND INFORMATICS)",
        "cutoff": 15.864
    },
    {
        "id": 1231,
        "category": "med",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH RECORDS MANAGEMENT & INFORMATICS",
        "cutoff": 15.864
    },
    {
        "id": 1232,
        "category": "med",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE HEALTH INFORMATION MANAGEMENT",
        "cutoff": 23.896
    },
    {
        "id": 1233,
        "category": "med",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN CLINICAL MEDICINE AND COMMUNITY HEALTH",
        "cutoff": 41.517
    },
    {
        "id": 1234,
        "category": "med",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN CLINICAL MEDICINE AND COMMUNITY HEALTH",
        "cutoff": 39.734
    },
    {
        "id": 1235,
        "category": "med",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN CLINICAL MEDICINE",
        "cutoff": 39.734
    },
    {
        "id": 1236,
        "category": "med",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "BACHELOR OF SCIENCE CLINICAL MEDICINE AND COMMUNITY HEALTH",
        "cutoff": 34.408
    },
    {
        "id": 1237,
        "category": "sci",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PHYSICAL THERAPY)",
        "cutoff": 36.681
    },
    {
        "id": 1238,
        "category": "sci",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PHYSICAL THERAPY)",
        "cutoff": 28.214
    },
    {
        "id": 1239,
        "category": "arts",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF RADIOGRAPHY",
        "cutoff": 43.325
    },
    {
        "id": 1240,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (APPLIED BIOENGINEERING)",
        "cutoff": 27.294
    },
    {
        "id": 1241,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (COASTAL & MARINE RESOURCE MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1242,
        "category": "sci",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (MARINE BIOLOGY & FISHERIES)",
        "cutoff": 15.864
    },
    {
        "id": 1243,
        "category": "sci",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF SCIENCE IN MARINE RESOURCE MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1244,
        "category": "med",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (POPULATION HEALTH)",
        "cutoff": 25.6
    },
    {
        "id": 1245,
        "category": "med",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (POPULATION HEALTH)",
        "cutoff": 15.864
    },
    {
        "id": 1246,
        "category": "med",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF SCIENCE (POPULATION HEALTH)",
        "cutoff": 28.396
    },
    {
        "id": 1247,
        "category": "sci",
        "school": "MULTIMEDIA UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN APPLIED OPTICS AND LASERS",
        "cutoff": 15.683
    },
    {
        "id": 1248,
        "category": "sci",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FORENSIC SCIENCE)",
        "cutoff": 15.683
    },
    {
        "id": 1249,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (FORENSIC SCIENCE)",
        "cutoff": 32.214
    },
    {
        "id": 1250,
        "category": "edu",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (ARTS) FINE ART",
        "cutoff": 27.035
    },
    {
        "id": 1251,
        "category": "sci",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (RECREATION AND SPORTS MANAGEMENT)",
        "cutoff": 19.92
    },
    {
        "id": 1252,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PETROLEUM ENGINEERING)",
        "cutoff": 35.347
    },
    {
        "id": 1253,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE(AEROSPACE ENGINEERING)",
        "cutoff": 41.379
    },
    {
        "id": 1254,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE(AEROSPACE ENGINEERING)",
        "cutoff": 41.341
    },
    {
        "id": 1255,
        "category": "agri",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE ( ENVIRONMENTAL CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 1256,
        "category": "sci",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PETROLEUM CHEMISTRY)",
        "cutoff": 15.683
    },
    {
        "id": 1257,
        "category": "arts",
        "school": "ISLAMIC UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ARTS IN ISLAMIC SHARIA",
        "cutoff": 20.93
    },
    {
        "id": 1258,
        "category": "med",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF HEALTH SERVICES MANAGEMENT",
        "cutoff": 27.581
    },
    {
        "id": 1259,
        "category": "arts",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF DISASTER MANAGEMENT & INTERNATIONAL",
        "cutoff": 22.449
    },
    {
        "id": 1260,
        "category": "arts",
        "school": "KAIMOSI FRIENDS UNIVERSITY",
        "name": "BACHELOR OF DISASTER MANAGEMENT & INTERNATIONAL DIPLOMACY",
        "cutoff": 22.449
    },
    {
        "id": 1261,
        "category": "biz",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (ECONOMICS, WITH IT)",
        "cutoff": 18.831
    },
    {
        "id": 1262,
        "category": "biz",
        "school": "TOM MBOYA UNIVERSITY",
        "name": "BACHELOR OF ARTS (ECONOMICS, WITH IT)",
        "cutoff": 18.831
    },
    {
        "id": 1263,
        "category": "biz",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF ARTS (ECONOMICS)",
        "cutoff": 18.831
    },
    {
        "id": 1264,
        "category": "biz",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF ARTS (ECONOMICS)",
        "cutoff": 18.831
    },
    {
        "id": 1265,
        "category": "biz",
        "school": "PWANI UNIVERSITY",
        "name": "BACHELOR OF ARTS (ECONOMICS)",
        "cutoff": 18.831
    },
    {
        "id": 1266,
        "category": "biz",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF ARTS (ECONOMICS)",
        "cutoff": 18.831
    },
    {
        "id": 1267,
        "category": "biz",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF ARTS (ECONOMICS)",
        "cutoff": 18.831
    },
    {
        "id": 1268,
        "category": "biz",
        "school": "BOMET UNIVERSITY COLLEGE",
        "name": "BACHELOR OF ARTS (ECONOMICS)",
        "cutoff": 18.831
    },
    {
        "id": 1269,
        "category": "biz",
        "school": "GARISSA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 1270,
        "category": "biz",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF ARTS IN ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 1271,
        "category": "biz",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF ARTS IN ECONOMICS",
        "cutoff": 18.831
    },
    {
        "id": 1272,
        "category": "biz",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN ECONOMICS AND BUSINESS STUDIES",
        "cutoff": 18.831
    },
    {
        "id": 1273,
        "category": "biz",
        "school": "AFRICA NAZARENE UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INTERNATIONAL BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 1274,
        "category": "biz",
        "school": "KCA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN INTERNATIONAL BUSINESS MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 1275,
        "category": "biz",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF BUSINESS INFORMATION AND MANAGEMENT",
        "cutoff": 21.375
    },
    {
        "id": 1276,
        "category": "law",
        "school": "CATHOLIC UNIVERSITY OF EASTERN  AFRICA",
        "name": "BACHELOR OF JUSTICE AND PEACE",
        "cutoff": 22.449
    },
    {
        "id": 1277,
        "category": "edu",
        "school": "KENYA HIGHLANDS EVANGELICAL UNIVERSITY",
        "name": "BACHELOR OF CHRISTIAN EDUCATION",
        "cutoff": 20.93
    },
    {
        "id": 1278,
        "category": "sci",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN ACCOUNTING",
        "cutoff": 29.648
    },
    {
        "id": 1279,
        "category": "biz",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF BUSINESS ADMINISTRATION IN ACCOUNTING",
        "cutoff": 18.831
    },
    {
        "id": 1280,
        "category": "sci",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (ACCOUNTING & FINANCE, WITH IT)",
        "cutoff": 26.172
    },
    {
        "id": 1281,
        "category": "edu",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF EDUCATION (SPECIAL NEEDS EDUCATION - SECONDARY OPTION)",
        "cutoff": 25.351
    },
    {
        "id": 1282,
        "category": "edu",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF EDUCATION SPECIAL NEEDS EDUCATION SECONDARY OPTION",
        "cutoff": 21.858
    },
    {
        "id": 1283,
        "category": "med",
        "school": "RONGO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1284,
        "category": "med",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1285,
        "category": "med",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1286,
        "category": "med",
        "school": "UZIMA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1287,
        "category": "med",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1288,
        "category": "med",
        "school": "KARATINA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1289,
        "category": "med",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1290,
        "category": "med",
        "school": "ZETECH UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT",
        "cutoff": 15.864
    },
    {
        "id": 1291,
        "category": "med",
        "school": "ST PAULS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT AND ECONOMICS",
        "cutoff": 15.864
    },
    {
        "id": 1292,
        "category": "med",
        "school": "AMREF INTERNATIONAL UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN HEALTH SYSTEMS MANAGEMENT AND DEVELOPMENT",
        "cutoff": 15.864
    },
    {
        "id": 1293,
        "category": "arts",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF PUBLIC POLICY AND ADMINISTRATION",
        "cutoff": 28.342
    },
    {
        "id": 1294,
        "category": "arts",
        "school": "KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE",
        "name": "BACHELOR OF PUBLIC POLICY AND ADMINISTRATION",
        "cutoff": 22.449
    },
    {
        "id": 1295,
        "category": "eng",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF MUSIC (TECHNOLOGY)",
        "cutoff": 23.417
    },
    {
        "id": 1296,
        "category": "eng",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF MUSIC PRODUCTION TECHNOLOGY",
        "cutoff": 23.417
    },
    {
        "id": 1297,
        "category": "arts",
        "school": "DAYSTAR UNIVERSITY",
        "name": "BACHELOR OF ARTS IN PEACE AND CONFLICT",
        "cutoff": 22.449
    },
    {
        "id": 1298,
        "category": "arts",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF ARTS IN PEACE AND CONFLICT STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 1299,
        "category": "sci",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN STATISTICS AND PROGRAMMING",
        "cutoff": 18.814
    },
    {
        "id": 1300,
        "category": "eng",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE IN STATISTICS AND INFORMATION TECHNOLOGY",
        "cutoff": 18.814
    },
    {
        "id": 1301,
        "category": "sci",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF SCIENCE (URBAN DESIGN AND DEVELOPMENT)",
        "cutoff": 26.071
    },
    {
        "id": 1302,
        "category": "arts",
        "school": "ISLAMIC UNIVERSITY OF KENYA",
        "name": "BACHELOR OF ARTS IN ARABIC LANGUAGE",
        "cutoff": 22.449
    },
    {
        "id": 1303,
        "category": "arts",
        "school": "AFRICA NAZARENE UNIVERSITY",
        "name": "BACHELOR OF ARTS IN PEACE STUDIES AND CONFLICT RESOLUTION",
        "cutoff": 22.449
    },
    {
        "id": 1304,
        "category": "arts",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN PEACE STUDIES AND CONFLICT RESOLUTION",
        "cutoff": 22.449
    },
    {
        "id": 1305,
        "category": "arts",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN PUBLIC ADMINISTRATION",
        "cutoff": 22.449
    },
    {
        "id": 1306,
        "category": "arts",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN PUBLIC ADMINISTRATION AND GOVERNANCE",
        "cutoff": 22.449
    },
    {
        "id": 1307,
        "category": "arts",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF ARTS IN SECURITY STUDIES AND CRIMINOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1308,
        "category": "arts",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "BACHELOR OF ARTS IN CONFLICTS AND SECURITY STUDIES",
        "cutoff": 22.449
    },
    {
        "id": 1309,
        "category": "arts",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1310,
        "category": "arts",
        "school": "KENYA ASSEMBLIES OF GOD EAST UNIVERSITY",
        "name": "BACHELOR OF COUNSELING PSYCHOLOGY",
        "cutoff": 22.449
    },
    {
        "id": 1311,
        "category": "eng",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "BACHELOR OF TECHNOLOGY (CONSTRUCTION MANAGEMENT)",
        "cutoff": 26.894
    },
    {
        "id": 1312,
        "category": "sci",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN FINANCE AND STATISTICS",
        "cutoff": 18.831
    },
    {
        "id": 1313,
        "category": "edu",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF EDUCATION (EARLY CHILDHOOD & PRIMARY EDUCATION)",
        "cutoff": 22.961
    },
    {
        "id": 1314,
        "category": "sci",
        "school": "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN MATHEMATICS AND MODELLING",
        "cutoff": 18.831
    },
    {
        "id": 1315,
        "category": "sci",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE IN MATHEMATICS & PHYSICS",
        "cutoff": 18.831
    },
    {
        "id": 1316,
        "category": "eng",
        "school": "UNIVERSITY OF ELDORET",
        "name": "BACHELOR OF ENGINEERING (MECHANICAL & PRODUCTION ENGINEERING)",
        "cutoff": 26.898
    },
    {
        "id": 1317,
        "category": "eng",
        "school": "MOI UNIVERSITY",
        "name": "BACHELOR OF ENGINEERING (MECHANICAL AND PRODUCTION ENGINEERING)",
        "cutoff": 36.089
    },
    {
        "id": 1318,
        "category": "it",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (GEOSPATIAL INFORMATION SCIENCE)",
        "cutoff": 15.683
    },
    {
        "id": 1319,
        "category": "it",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE (GEOSPATIAL INFORMATION SCIENCE)",
        "cutoff": 27.531
    },
    {
        "id": 1320,
        "category": "arts",
        "school": "MAASAI MARA UNIVERSITY",
        "name": "BACHELOR OF ARTS (GEOGRAPHY)",
        "cutoff": 15.683
    },
    {
        "id": 1321,
        "category": "agri",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (FOOD SCIENCE AND MANAGEMENT)",
        "cutoff": 15.864
    },
    {
        "id": 1322,
        "category": "eng",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE INDUSTRIAL BIOTECHNOLOGY",
        "cutoff": 15.683
    },
    {
        "id": 1323,
        "category": "med",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PUBLIC HEALTH, WITH IT)",
        "cutoff": 33.436
    },
    {
        "id": 1324,
        "category": "med",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (PUBLIC HEALTH)",
        "cutoff": 25.558
    },
    {
        "id": 1325,
        "category": "med",
        "school": "UNIVERSITY OF KABIANGA",
        "name": "BACHELOR OF SCIENCE (PUBLIC HEALTH)",
        "cutoff": 29.664
    },
    {
        "id": 1326,
        "category": "med",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE (PUBLIC HEALTH)",
        "cutoff": 29.179
    },
    {
        "id": 1327,
        "category": "med",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (PUBLIC HEALTH)",
        "cutoff": 26.747
    },
    {
        "id": 1328,
        "category": "med",
        "school": "KABARAK UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN PUBLIC HEALTH",
        "cutoff": 27.842
    },
    {
        "id": 1329,
        "category": "med",
        "school": "KISII UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN PUBLIC HEALTH",
        "cutoff": 31.45
    },
    {
        "id": 1330,
        "category": "med",
        "school": "MACHAKOS UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN PUBLIC HEALTH",
        "cutoff": 27.956
    },
    {
        "id": 1331,
        "category": "med",
        "school": "UNIVERSITY OF EASTERN AFRICA, BARATON",
        "name": "BACHELOR OF SCIENCE IN PUBLIC HEALTH",
        "cutoff": 15.864
    },
    {
        "id": 1332,
        "category": "med",
        "school": "JOMO KENYATTA UNIVERSITY OF",
        "name": "BACHELOR OF SCIENCE IN PUBLIC HEALTH",
        "cutoff": 37.245
    },
    {
        "id": 1333,
        "category": "med",
        "school": "CHUKA UNIVERSITY",
        "name": "BACHELOR OF PUBLIC HEALTH",
        "cutoff": 29.419
    },
    {
        "id": 1334,
        "category": "med",
        "school": "MOUNT KENYA UNIVERSITY",
        "name": "BACHELOR OF PUBLIC HEALTH",
        "cutoff": 27.488
    },
    {
        "id": 1335,
        "category": "med",
        "school": "ALUPE UNIVERSITY",
        "name": "BACHELOR OF SCIENCE IN ENVIRONMENTAL HEALTH",
        "cutoff": 15.864
    },
    {
        "id": 1336,
        "category": "sci",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE (DISASTER MITIGATION AND",
        "cutoff": 22.449
    },
    {
        "id": 1337,
        "category": "arts",
        "school": "MASENO UNIVERSITY",
        "name": "BACHELOR OF ARTS (URBAN AND REGIONAL PLANNING, WITH",
        "cutoff": 18.392
    },
    {
        "id": 1338,
        "category": "arch",
        "school": "JARAMOGI OGINGA ODINGA UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "BACHELOR OF SCIENCE(CONSTRUCTION MANAGEMENT)",
        "cutoff": 18.392
    },
    {
        "id": 1339,
        "category": "arch",
        "school": "KENYATTA UNIVERSITY",
        "name": "BACHELOR OF SCIENCE(CONSTRUCTION MANAGEMENT)",
        "cutoff": 34.138
    },
    {
        "id": "dip_0",
        "category": "biz",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1",
        "category": "biz",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2",
        "category": "biz",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_3",
        "category": "biz",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_4",
        "category": "biz",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK& COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_5",
        "category": "biz",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_6",
        "category": "biz",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_7",
        "category": "biz",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_8",
        "category": "biz",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_9",
        "category": "biz",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_10",
        "category": "biz",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_11",
        "category": "biz",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_12",
        "category": "biz",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_13",
        "category": "biz",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_14",
        "category": "biz",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_15",
        "category": "soc",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_16",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_17",
        "category": "biz",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_18",
        "category": "soc",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_19",
        "category": "biz",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_20",
        "category": "biz",
        "level": "diploma",
        "school": "KIBABII UNIVERSITY",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_21",
        "category": "biz",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_22",
        "category": "soc",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN SOCIAL WORK AND DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_23",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_24",
        "category": "soc",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN SOCIAL WORK AND SOCIAL DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_25",
        "category": "biz",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_26",
        "category": "biz",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_27",
        "category": "biz",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_28",
        "category": "biz",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_29",
        "category": "biz",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_30",
        "category": "biz",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_31",
        "category": "biz",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_32",
        "category": "biz",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_33",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_34",
        "category": "biz",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_35",
        "category": "biz",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_36",
        "category": "biz",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_37",
        "category": "biz",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_38",
        "category": "biz",
        "level": "diploma",
        "school": "MACHAKOS TECHNICAL INSTITUTE FOR THE BLIND",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_39",
        "category": "biz",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_40",
        "category": "biz",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_41",
        "category": "biz",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_42",
        "category": "biz",
        "level": "diploma",
        "school": "GODOMA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_43",
        "category": "biz",
        "level": "diploma",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_44",
        "category": "biz",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_45",
        "category": "biz",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK& COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_46",
        "category": "biz",
        "level": "diploma",
        "school": "AHMED SHAHAME MWIDANI TECHNICAL TRAINING",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_47",
        "category": "biz",
        "level": "diploma",
        "school": "WERU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_48",
        "category": "biz",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_49",
        "category": "biz",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_50",
        "category": "biz",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_51",
        "category": "biz",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_52",
        "category": "biz",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_53",
        "category": "biz",
        "level": "diploma",
        "school": "SOTIK TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_54",
        "category": "biz",
        "level": "diploma",
        "school": "NAIVASHA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK& COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_55",
        "category": "biz",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_56",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_57",
        "category": "biz",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_58",
        "category": "biz",
        "level": "diploma",
        "school": "SIKRI TECHNICAL TRAINING INSTITUTE FOR THE BLIND AND",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_59",
        "category": "biz",
        "level": "diploma",
        "school": "KAPCHEROP TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK& COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_60",
        "category": "biz",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_61",
        "category": "biz",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_62",
        "category": "biz",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_63",
        "category": "biz",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_64",
        "category": "biz",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_65",
        "category": "biz",
        "level": "diploma",
        "school": "BUNYALA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_66",
        "category": "biz",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_67",
        "category": "biz",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SOCIAL WORK& COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_68",
        "category": "biz",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_69",
        "category": "biz",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_70",
        "category": "biz",
        "level": "diploma",
        "school": "LAIKIPIA NORTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_71",
        "category": "biz",
        "level": "diploma",
        "school": "RUNYENJES TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_72",
        "category": "biz",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_73",
        "category": "biz",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_74",
        "category": "biz",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_75",
        "category": "biz",
        "level": "diploma",
        "school": "KIMININI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK & COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_76",
        "category": "biz",
        "level": "diploma",
        "school": "KIPTARAGON TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_77",
        "category": "biz",
        "level": "diploma",
        "school": "CHEPSIREI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_78",
        "category": "biz",
        "level": "diploma",
        "school": "SAMBURU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_79",
        "category": "biz",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SOCIAL WORK AND COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_80",
        "category": "biz",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT AND SOCIAL WORK",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_81",
        "category": "tvet",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_82",
        "category": "tvet",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_83",
        "category": "tvet",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_84",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_85",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SALES & MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_86",
        "category": "tvet",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SALES & MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_87",
        "category": "tvet",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_88",
        "category": "tvet",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_89",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_90",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_91",
        "category": "tvet",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_92",
        "category": "tvet",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_93",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_94",
        "category": "tvet",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_95",
        "category": "tvet",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_96",
        "category": "tvet",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SALES & MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_97",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_98",
        "category": "tvet",
        "level": "diploma",
        "school": "PWANI UNIVERSITY",
        "name": "DIPLOMA IN MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_99",
        "category": "tvet",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_100",
        "category": "tvet",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN SALE AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_101",
        "category": "tvet",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_102",
        "category": "tvet",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_103",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_104",
        "category": "tvet",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SALE AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_105",
        "category": "tvet",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN SALES & MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_106",
        "category": "tvet",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_107",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_108",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_109",
        "category": "tvet",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_110",
        "category": "tvet",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_111",
        "category": "tvet",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_112",
        "category": "tvet",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_113",
        "category": "tvet",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_114",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALES & MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_115",
        "category": "tvet",
        "level": "diploma",
        "school": "GODOMA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_116",
        "category": "tvet",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_117",
        "category": "tvet",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SALE AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_118",
        "category": "tvet",
        "level": "diploma",
        "school": "BAHATI INSTITUTE OF BUSINESS AND ADMINISTRATION",
        "name": "DIPLOMA IN SALES & MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_119",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHIOYA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_120",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_121",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_122",
        "category": "tvet",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_123",
        "category": "tvet",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_124",
        "category": "tvet",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SALES & MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_125",
        "category": "tvet",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_126",
        "category": "tvet",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SALES AND MARKETING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_127",
        "category": "agri",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_128",
        "category": "agri",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD & BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_129",
        "category": "agri",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN FOOD AND BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_130",
        "category": "agri",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN FOOD & BEVERAGE PROD,SALES & SERVICES MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_131",
        "category": "agri",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN FOOD AND BEVERAGE PRODUCTION,SALES AND SERVICES",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_132",
        "category": "agri",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN FOOD & BEVERAGES PRODUCTION,SALES &SERVICE MGT.",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_133",
        "category": "agri",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_134",
        "category": "agri",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN FOOD & BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_135",
        "category": "agri",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE,PRODUCTION AND SERVICE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_136",
        "category": "agri",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_137",
        "category": "agri",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN FOOD & BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_138",
        "category": "agri",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD & BEVERAGE PRODUCTION,SALES & SERVICE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_139",
        "category": "agri",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE PRODUCTION AND SERVICE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_140",
        "category": "agri",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN FOOD & BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_141",
        "category": "agri",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD & BEVERAGE PRODUCTION,SALES & SERVICE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_142",
        "category": "agri",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD & BEVERAGE PRODUCTION & SALES SERVICES",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_143",
        "category": "agri",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_144",
        "category": "agri",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN FOOD & BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_145",
        "category": "agri",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN FOOD & BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_146",
        "category": "agri",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN FOOD & BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_147",
        "category": "agri",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_148",
        "category": "agri",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN FOOD & BEVERAGES PRODUCTION",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_149",
        "category": "agri",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN FOOD AND BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_150",
        "category": "agri",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN FOOD & BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_151",
        "category": "agri",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGES",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_152",
        "category": "agri",
        "level": "diploma",
        "school": "MURANGA UNIVERSITY OF TECHNOLOGY",
        "name": "DIPLOMA IN FOOD AND BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_153",
        "category": "agri",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN FOOD AND BEVERAGES PRODUCTION, SALES & SERVICE MANAGEMENT.",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_154",
        "category": "agri",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD & BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_155",
        "category": "agri",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_156",
        "category": "agri",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE(PRODUCTION AND SERVICE)",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_157",
        "category": "agri",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE PRODUCTION,SALES AND SERVICES",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_158",
        "category": "agri",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN FOOD AND BEVERAGE PRODUCTION AND SERVICE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_159",
        "category": "agri",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN FOOD & BEVERAGE PROD,SALES & SERVICES MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_160",
        "category": "agri",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGES PRODUCTION, SALES & SERVICE MANAGEMENT.",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_161",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_162",
        "category": "agri",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_163",
        "category": "agri",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_164",
        "category": "agri",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_165",
        "category": "agri",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD & BEVERAGE PRODUCTION,SALES & SERVICE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_166",
        "category": "agri",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE PRODUCTION,SALES AND SERVICES",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_167",
        "category": "agri",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE,PRODUCTION AND SERVICE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_168",
        "category": "agri",
        "level": "diploma",
        "school": "BUNYALA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD AND BEVERAGES PRODUCTION, SALES & SERVICE MANAGEMENT.",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_169",
        "category": "agri",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_170",
        "category": "agri",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_171",
        "category": "agri",
        "level": "diploma",
        "school": "LAIKIPIA NORTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD & BEVERAGE MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_172",
        "category": "agri",
        "level": "diploma",
        "school": "MURAGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD AND BEVERAGES PRODUCTION, SALES & SERVICE MANAGEMENT.",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_173",
        "category": "agri",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD & BEVERAGE PROD,SALES & SERVICES MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_174",
        "category": "agri",
        "level": "diploma",
        "school": "KIPTARAGON TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD AND BEVERAGE PRODUCTION,SALES AND SERVICES",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_175",
        "category": "eng",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_176",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_177",
        "category": "eng",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_178",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_179",
        "category": "eng",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_180",
        "category": "eng",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_181",
        "category": "eng",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_182",
        "category": "eng",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_183",
        "category": "eng",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (ELECTRONICS OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_184",
        "category": "eng",
        "level": "diploma",
        "school": "GODOMA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_185",
        "category": "eng",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING(ELECTRONICS )",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_186",
        "category": "eng",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_187",
        "category": "eng",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_188",
        "category": "eng",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_189",
        "category": "eng",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_190",
        "category": "eng",
        "level": "diploma",
        "school": "KIMININI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_191",
        "category": "eng",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_192",
        "category": "eng",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_193",
        "category": "eng",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_194",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_195",
        "category": "eng",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_196",
        "category": "eng",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_197",
        "category": "eng",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_198",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_199",
        "category": "eng",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_200",
        "category": "eng",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_201",
        "category": "eng",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_202",
        "category": "eng",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_203",
        "category": "eng",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_204",
        "category": "eng",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_205",
        "category": "eng",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_206",
        "category": "eng",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_207",
        "category": "eng",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_208",
        "category": "eng",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_209",
        "category": "eng",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_210",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_211",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_212",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_213",
        "category": "eng",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_214",
        "category": "eng",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_215",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_216",
        "category": "eng",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN AUTOMOTIVE TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_217",
        "category": "eng",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_218",
        "category": "eng",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_219",
        "category": "eng",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_220",
        "category": "eng",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_221",
        "category": "eng",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_222",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_223",
        "category": "eng",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_224",
        "category": "eng",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_225",
        "category": "eng",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_226",
        "category": "eng",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_227",
        "category": "eng",
        "level": "diploma",
        "school": "EMINING TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_228",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_229",
        "category": "eng",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_230",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_231",
        "category": "eng",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_232",
        "category": "eng",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_233",
        "category": "eng",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_234",
        "category": "eng",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_235",
        "category": "eng",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_236",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_237",
        "category": "eng",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_238",
        "category": "eng",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_239",
        "category": "eng",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_240",
        "category": "eng",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_241",
        "category": "eng",
        "level": "diploma",
        "school": "WERU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_242",
        "category": "eng",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_243",
        "category": "eng",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_244",
        "category": "eng",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_245",
        "category": "eng",
        "level": "diploma",
        "school": "SOTIK TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_246",
        "category": "eng",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_247",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INDUSTRIAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_248",
        "category": "eng",
        "level": "diploma",
        "school": "MATHIOYA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_249",
        "category": "eng",
        "level": "diploma",
        "school": "KAPCHEROP TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_250",
        "category": "eng",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_251",
        "category": "eng",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_252",
        "category": "eng",
        "level": "diploma",
        "school": "BUNYALA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_253",
        "category": "eng",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_254",
        "category": "eng",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_255",
        "category": "eng",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_256",
        "category": "eng",
        "level": "diploma",
        "school": "NACHU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_257",
        "category": "eng",
        "level": "diploma",
        "school": "NDIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_258",
        "category": "eng",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_259",
        "category": "eng",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_260",
        "category": "eng",
        "level": "diploma",
        "school": "KIMININI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_261",
        "category": "eng",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AUTOMOTIVE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_262",
        "category": "eng",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_263",
        "category": "eng",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_264",
        "category": "eng",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_265",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_266",
        "category": "eng",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_267",
        "category": "eng",
        "level": "diploma",
        "school": "NITA - ATHI RIVER",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_268",
        "category": "eng",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_269",
        "category": "eng",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_270",
        "category": "eng",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_271",
        "category": "eng",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_272",
        "category": "eng",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_273",
        "category": "eng",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_274",
        "category": "eng",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_275",
        "category": "eng",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_276",
        "category": "eng",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_277",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_278",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_279",
        "category": "eng",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_280",
        "category": "eng",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING ( PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_281",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_282",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_283",
        "category": "eng",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_284",
        "category": "eng",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING ( PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_285",
        "category": "eng",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_286",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_287",
        "category": "eng",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_288",
        "category": "eng",
        "level": "diploma",
        "school": "EMINING TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_289",
        "category": "eng",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_290",
        "category": "eng",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_291",
        "category": "eng",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_292",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_293",
        "category": "eng",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING ( PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_294",
        "category": "eng",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING ( PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_295",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INDUSTRIAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_296",
        "category": "eng",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING ( PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_297",
        "category": "eng",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING ( PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_298",
        "category": "eng",
        "level": "diploma",
        "school": "SAMBURU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PLANT OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_299",
        "category": "eng",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING ( PLANT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_300",
        "category": "tvet",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_301",
        "category": "tvet",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_302",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_303",
        "category": "tvet",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_304",
        "category": "tvet",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_305",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_306",
        "category": "tvet",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_307",
        "category": "tvet",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_308",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_309",
        "category": "tvet",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_310",
        "category": "tvet",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_311",
        "category": "tvet",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_312",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_313",
        "category": "tvet",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_314",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_315",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_316",
        "category": "tvet",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_317",
        "category": "tvet",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_318",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_319",
        "category": "tvet",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_320",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_321",
        "category": "tvet",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_322",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_323",
        "category": "tvet",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_324",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_325",
        "category": "tvet",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_326",
        "category": "tvet",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_327",
        "category": "tvet",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN APPLIED BIOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_328",
        "category": "sci",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_329",
        "category": "sci",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_330",
        "category": "sci",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_331",
        "category": "sci",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_332",
        "category": "sci",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_333",
        "category": "sci",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_334",
        "category": "sci",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_335",
        "category": "sci",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_336",
        "category": "sci",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_337",
        "category": "sci",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ENVIRONMENTAL SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_338",
        "category": "tvet",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_339",
        "category": "tvet",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_340",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_341",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_342",
        "category": "tvet",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_343",
        "category": "tvet",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_344",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_345",
        "category": "tvet",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_346",
        "category": "tvet",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_347",
        "category": "tvet",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_348",
        "category": "tvet",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_349",
        "category": "tvet",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_350",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_351",
        "category": "tvet",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_352",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_353",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_354",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_355",
        "category": "tvet",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_356",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_357",
        "category": "tvet",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_358",
        "category": "tvet",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_359",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_360",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_361",
        "category": "tvet",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ANALYTICAL CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_362",
        "category": "eng",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_363",
        "category": "eng",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_364",
        "category": "eng",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_365",
        "category": "eng",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_366",
        "category": "eng",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ELECTRONICS (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_367",
        "category": "eng",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (TELECOMMUNICATION Option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_368",
        "category": "eng",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_369",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_370",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_371",
        "category": "eng",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_372",
        "category": "eng",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATIONS)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_373",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN TELECOMMUNICATION ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_374",
        "category": "eng",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_375",
        "category": "eng",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ELCTRICAL ENGINEERING (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_376",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (TELECOMMUNICATION Option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_377",
        "category": "eng",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL/ ELECTRONICS TECHNOLOGY (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_378",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_379",
        "category": "eng",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL/ ELECTRONICS TECHNOLOGY (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_380",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_381",
        "category": "eng",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_382",
        "category": "eng",
        "level": "diploma",
        "school": "EAST AFRICAN SCHOOL OF AVIATION",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (TELECOMMUNICATION Option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_383",
        "category": "eng",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_384",
        "category": "eng",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (TELECOMMUNICATION Option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_385",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INDUSTRIAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_386",
        "category": "eng",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_387",
        "category": "eng",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_388",
        "category": "eng",
        "level": "diploma",
        "school": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_389",
        "category": "eng",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (TELECOMMUNICATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_390",
        "category": "agri",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD SCIENCE TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_391",
        "category": "agri",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN FOOD SCIENCE AND TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_392",
        "category": "agri",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN FOOD SCIENCE TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_393",
        "category": "agri",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN FOOD SCIENCE AND TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_394",
        "category": "agri",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN FOOD SCIENCE & PROCESSING TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_395",
        "category": "agri",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_396",
        "category": "agri",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN FOOD SCIENCE AND TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_397",
        "category": "agri",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN FOOD TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_398",
        "category": "agri",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN FOOD TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_399",
        "category": "agri",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN FOOD SCIENCE TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_400",
        "category": "agri",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN FOOD TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_401",
        "category": "agri",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN FOOD SCIENCE AND TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_402",
        "category": "agri",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD SCIENCE AND PROCESSING TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_403",
        "category": "agri",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD SCIENCE & PROCESSING TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_404",
        "category": "agri",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_405",
        "category": "agri",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD SCIENCE AND TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_406",
        "category": "agri",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD SCIENCE AND PROCESSING TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_407",
        "category": "agri",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FOOD SCIENCE TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_408",
        "category": "tvet",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_409",
        "category": "tvet",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_410",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_411",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_412",
        "category": "tvet",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_413",
        "category": "tvet",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_414",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_415",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_416",
        "category": "tvet",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_417",
        "category": "tvet",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_418",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_419",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_420",
        "category": "tvet",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_421",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_422",
        "category": "tvet",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_423",
        "category": "tvet",
        "level": "diploma",
        "school": "MUKURWEINI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_424",
        "category": "tvet",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_425",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_426",
        "category": "tvet",
        "level": "diploma",
        "school": "BAHATI INSTITUTE OF BUSINESS AND ADMINISTRATION",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_427",
        "category": "tvet",
        "level": "diploma",
        "school": "LAIKIPIA NORTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_428",
        "category": "tvet",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN PROJECT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_429",
        "category": "biz",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_430",
        "category": "biz",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_431",
        "category": "tvet",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_432",
        "category": "biz",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_433",
        "category": "biz",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_434",
        "category": "biz",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_435",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_436",
        "category": "biz",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_437",
        "category": "biz",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_438",
        "category": "biz",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_439",
        "category": "biz",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_440",
        "category": "biz",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_441",
        "category": "biz",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_442",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_443",
        "category": "tvet",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPLILES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_444",
        "category": "biz",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_445",
        "category": "biz",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_446",
        "category": "biz",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_447",
        "category": "biz",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_448",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_449",
        "category": "biz",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_450",
        "category": "biz",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_451",
        "category": "biz",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_452",
        "category": "tvet",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_453",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN SUPPLIES AND CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_454",
        "category": "tvet",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_455",
        "category": "tvet",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_456",
        "category": "tvet",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_457",
        "category": "biz",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_458",
        "category": "tvet",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_459",
        "category": "tvet",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SUPLILES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_460",
        "category": "biz",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_461",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_462",
        "category": "tvet",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_463",
        "category": "tvet",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_464",
        "category": "biz",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_465",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_466",
        "category": "tvet",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_467",
        "category": "biz",
        "level": "diploma",
        "school": "KARATINA UNIVERSITY",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_468",
        "category": "biz",
        "level": "diploma",
        "school": "EMINING TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_469",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_470",
        "category": "tvet",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_471",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_472",
        "category": "biz",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_473",
        "category": "biz",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_474",
        "category": "biz",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_475",
        "category": "biz",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_476",
        "category": "biz",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_477",
        "category": "tvet",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPLILES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_478",
        "category": "biz",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_479",
        "category": "biz",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_480",
        "category": "tvet",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_481",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLIES AND CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_482",
        "category": "biz",
        "level": "diploma",
        "school": "GODOMA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_483",
        "category": "biz",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_484",
        "category": "biz",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_485",
        "category": "biz",
        "level": "diploma",
        "school": "AHMED SHAHAME MWIDANI TECHNICAL TRAINING",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_486",
        "category": "tvet",
        "level": "diploma",
        "school": "WERU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_487",
        "category": "biz",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_488",
        "category": "tvet",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_489",
        "category": "biz",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_490",
        "category": "biz",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_491",
        "category": "biz",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_492",
        "category": "biz",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_493",
        "category": "biz",
        "level": "diploma",
        "school": "SOTIK TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_494",
        "category": "biz",
        "level": "diploma",
        "school": "NAIVASHA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_495",
        "category": "tvet",
        "level": "diploma",
        "school": "BAHATI INSTITUTE OF BUSINESS AND ADMINISTRATION",
        "name": "DIPLOMA IN PURCHASING AND SUPPLIES MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_496",
        "category": "biz",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_497",
        "category": "biz",
        "level": "diploma",
        "school": "KAPCHEROP TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_498",
        "category": "biz",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_499",
        "category": "biz",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_500",
        "category": "biz",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_501",
        "category": "biz",
        "level": "diploma",
        "school": "CHUKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_502",
        "category": "biz",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_503",
        "category": "tvet",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLIES AND CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_504",
        "category": "biz",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_505",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_506",
        "category": "biz",
        "level": "diploma",
        "school": "GATANGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_507",
        "category": "tvet",
        "level": "diploma",
        "school": "BORABU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_508",
        "category": "biz",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_509",
        "category": "biz",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_510",
        "category": "biz",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_511",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHIRA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_512",
        "category": "biz",
        "level": "diploma",
        "school": "NACHU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_513",
        "category": "biz",
        "level": "diploma",
        "school": "OKAME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_514",
        "category": "biz",
        "level": "diploma",
        "school": "RUNYENJES TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_515",
        "category": "biz",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_516",
        "category": "biz",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_517",
        "category": "biz",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_518",
        "category": "biz",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_519",
        "category": "biz",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_520",
        "category": "biz",
        "level": "diploma",
        "school": "SEME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_521",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_522",
        "category": "biz",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_523",
        "category": "tvet",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLIES CHAIN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_524",
        "category": "biz",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_525",
        "category": "biz",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_526",
        "category": "biz",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_527",
        "category": "biz",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_528",
        "category": "biz",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_529",
        "category": "biz",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_530",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_531",
        "category": "biz",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_532",
        "category": "biz",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_533",
        "category": "biz",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_534",
        "category": "biz",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_535",
        "category": "biz",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_536",
        "category": "biz",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_537",
        "category": "biz",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_538",
        "category": "biz",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_539",
        "category": "biz",
        "level": "diploma",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_540",
        "category": "biz",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_541",
        "category": "biz",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_542",
        "category": "biz",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_543",
        "category": "biz",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_544",
        "category": "biz",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_545",
        "category": "biz",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_546",
        "category": "biz",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_547",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_548",
        "category": "biz",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_549",
        "category": "biz",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_550",
        "category": "biz",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_551",
        "category": "biz",
        "level": "diploma",
        "school": "KIBABII UNIVERSITY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_552",
        "category": "biz",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_553",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_554",
        "category": "biz",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_555",
        "category": "biz",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_556",
        "category": "biz",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_557",
        "category": "biz",
        "level": "diploma",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_558",
        "category": "biz",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_559",
        "category": "biz",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_560",
        "category": "biz",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_561",
        "category": "biz",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_562",
        "category": "biz",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_563",
        "category": "biz",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_564",
        "category": "biz",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_565",
        "category": "biz",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_566",
        "category": "biz",
        "level": "diploma",
        "school": "KARATINA UNIVERSITY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_567",
        "category": "biz",
        "level": "diploma",
        "school": "EMINING TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_568",
        "category": "biz",
        "level": "diploma",
        "school": "MURANGA UNIVERSITY OF TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_569",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_570",
        "category": "biz",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_571",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_572",
        "category": "biz",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_573",
        "category": "biz",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_574",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_575",
        "category": "biz",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_576",
        "category": "biz",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_577",
        "category": "biz",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_578",
        "category": "biz",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_579",
        "category": "biz",
        "level": "diploma",
        "school": "CATHOLIC UNIVERSITY OF EAST AFRICA",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_580",
        "category": "biz",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_581",
        "category": "biz",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_582",
        "category": "biz",
        "level": "diploma",
        "school": "GODOMA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_583",
        "category": "biz",
        "level": "diploma",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_584",
        "category": "biz",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_585",
        "category": "biz",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_586",
        "category": "biz",
        "level": "diploma",
        "school": "AHMED SHAHAME MWIDANI TECHNICAL TRAINING",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_587",
        "category": "biz",
        "level": "diploma",
        "school": "WERU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_588",
        "category": "biz",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_589",
        "category": "biz",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_590",
        "category": "biz",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_591",
        "category": "biz",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_592",
        "category": "biz",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_593",
        "category": "biz",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_594",
        "category": "biz",
        "level": "diploma",
        "school": "SOTIK TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_595",
        "category": "biz",
        "level": "diploma",
        "school": "NAIVASHA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_596",
        "category": "biz",
        "level": "diploma",
        "school": "BAHATI INSTITUTE OF BUSINESS AND ADMINISTRATION",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_597",
        "category": "biz",
        "level": "diploma",
        "school": "MATHIOYA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_598",
        "category": "biz",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_599",
        "category": "biz",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_600",
        "category": "biz",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_601",
        "category": "biz",
        "level": "diploma",
        "school": "CHUKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_602",
        "category": "biz",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_603",
        "category": "biz",
        "level": "diploma",
        "school": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_604",
        "category": "biz",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_605",
        "category": "biz",
        "level": "diploma",
        "school": "GATANGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_606",
        "category": "biz",
        "level": "diploma",
        "school": "BUNYALA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_607",
        "category": "biz",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_608",
        "category": "biz",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_609",
        "category": "biz",
        "level": "diploma",
        "school": "KIPIPIRI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_610",
        "category": "biz",
        "level": "diploma",
        "school": "NDIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_611",
        "category": "biz",
        "level": "diploma",
        "school": "OKAME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_612",
        "category": "biz",
        "level": "diploma",
        "school": "RUNYENJES TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_613",
        "category": "biz",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_614",
        "category": "biz",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_615",
        "category": "biz",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_616",
        "category": "biz",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_617",
        "category": "biz",
        "level": "diploma",
        "school": "ELDAMA RAVINE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_618",
        "category": "biz",
        "level": "diploma",
        "school": "KIPSOEN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_619",
        "category": "biz",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_620",
        "category": "biz",
        "level": "diploma",
        "school": "SEME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_621",
        "category": "biz",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_622",
        "category": "biz",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_623",
        "category": "biz",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_624",
        "category": "biz",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_625",
        "category": "biz",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_626",
        "category": "biz",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_627",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_628",
        "category": "biz",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_629",
        "category": "biz",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_630",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_631",
        "category": "biz",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_632",
        "category": "biz",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_633",
        "category": "biz",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_634",
        "category": "biz",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_635",
        "category": "biz",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_636",
        "category": "biz",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_637",
        "category": "biz",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_638",
        "category": "biz",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_639",
        "category": "biz",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY(ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_640",
        "category": "biz",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_641",
        "category": "biz",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_642",
        "category": "biz",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_643",
        "category": "biz",
        "level": "diploma",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_644",
        "category": "biz",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_645",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_646",
        "category": "biz",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_647",
        "category": "biz",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_648",
        "category": "biz",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_649",
        "category": "biz",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_650",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY(ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_651",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_652",
        "category": "biz",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_653",
        "category": "biz",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_654",
        "category": "biz",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_655",
        "category": "biz",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_656",
        "category": "biz",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION & COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_657",
        "category": "biz",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_658",
        "category": "biz",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_659",
        "category": "biz",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY(ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_660",
        "category": "biz",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_661",
        "category": "biz",
        "level": "diploma",
        "school": "EMINING TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_662",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_663",
        "category": "biz",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_664",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_665",
        "category": "biz",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY(ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_666",
        "category": "biz",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_667",
        "category": "biz",
        "level": "diploma",
        "school": "ST JOSEPH'S TECHNICAL INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_668",
        "category": "biz",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_669",
        "category": "biz",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_670",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA WATER INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_671",
        "category": "biz",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY(ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_672",
        "category": "biz",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_673",
        "category": "biz",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_674",
        "category": "biz",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY(ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_675",
        "category": "biz",
        "level": "diploma",
        "school": "MACHAKOS TECHNICAL INSTITUTE FOR THE BLIND",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY(ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_676",
        "category": "biz",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION & COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_677",
        "category": "biz",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_678",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF SURVEYING AND MAPPING",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_679",
        "category": "biz",
        "level": "diploma",
        "school": "REGIONAL CENTRE FOR MAPPING OF RESOURCES FOR",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_680",
        "category": "biz",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_681",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_682",
        "category": "biz",
        "level": "diploma",
        "school": "GODOMA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_683",
        "category": "biz",
        "level": "diploma",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_684",
        "category": "biz",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_685",
        "category": "biz",
        "level": "diploma",
        "school": "BUKURA AGRICULTURAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_686",
        "category": "biz",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_687",
        "category": "biz",
        "level": "diploma",
        "school": "AHMED SHAHAME MWIDANI TECHNICAL TRAINING",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_688",
        "category": "biz",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY(ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_689",
        "category": "biz",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_690",
        "category": "biz",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_691",
        "category": "biz",
        "level": "diploma",
        "school": "KOSHIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_692",
        "category": "biz",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_693",
        "category": "biz",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_694",
        "category": "biz",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_695",
        "category": "biz",
        "level": "diploma",
        "school": "SOTIK TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_696",
        "category": "biz",
        "level": "diploma",
        "school": "NAIVASHA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_697",
        "category": "biz",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_698",
        "category": "biz",
        "level": "diploma",
        "school": "BAHATI INSTITUTE OF BUSINESS AND ADMINISTRATION",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_699",
        "category": "biz",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_700",
        "category": "biz",
        "level": "diploma",
        "school": "MATHIOYA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_701",
        "category": "biz",
        "level": "diploma",
        "school": "KAPCHEROP TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_702",
        "category": "biz",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_703",
        "category": "biz",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_704",
        "category": "biz",
        "level": "diploma",
        "school": "TAVETA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_705",
        "category": "biz",
        "level": "diploma",
        "school": "CHUKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_706",
        "category": "biz",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_707",
        "category": "biz",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_708",
        "category": "biz",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_709",
        "category": "biz",
        "level": "diploma",
        "school": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_710",
        "category": "biz",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_711",
        "category": "biz",
        "level": "diploma",
        "school": "GATANGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_712",
        "category": "biz",
        "level": "diploma",
        "school": "BUNYALA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_713",
        "category": "biz",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION & COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_714",
        "category": "biz",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_715",
        "category": "biz",
        "level": "diploma",
        "school": "KIPIPIRI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_716",
        "category": "biz",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_717",
        "category": "biz",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_718",
        "category": "biz",
        "level": "diploma",
        "school": "LAIKIPIA NORTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_719",
        "category": "biz",
        "level": "diploma",
        "school": "MANDERA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION & COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_720",
        "category": "biz",
        "level": "diploma",
        "school": "MATHIRA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY(ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_721",
        "category": "biz",
        "level": "diploma",
        "school": "NACHU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_722",
        "category": "biz",
        "level": "diploma",
        "school": "NDIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_723",
        "category": "biz",
        "level": "diploma",
        "school": "OKAME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_724",
        "category": "biz",
        "level": "diploma",
        "school": "RUNYENJES TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_725",
        "category": "biz",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_726",
        "category": "biz",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION & COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_727",
        "category": "biz",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_728",
        "category": "biz",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_729",
        "category": "biz",
        "level": "diploma",
        "school": "KIENI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_730",
        "category": "biz",
        "level": "diploma",
        "school": "KIMASIAN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_731",
        "category": "biz",
        "level": "diploma",
        "school": "ELDAMA RAVINE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_732",
        "category": "biz",
        "level": "diploma",
        "school": "KIMININI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_733",
        "category": "biz",
        "level": "diploma",
        "school": "KIPTARAGON TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_734",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_735",
        "category": "biz",
        "level": "diploma",
        "school": "CHEPSIREI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_736",
        "category": "biz",
        "level": "diploma",
        "school": "KIPSOEN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION & COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_737",
        "category": "biz",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_738",
        "category": "biz",
        "level": "diploma",
        "school": "SEME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_739",
        "category": "biz",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_740",
        "category": "biz",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_741",
        "category": "tvet",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_742",
        "category": "tvet",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_743",
        "category": "tvet",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_744",
        "category": "tvet",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_745",
        "category": "tvet",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_746",
        "category": "tvet",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_747",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_748",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_749",
        "category": "tvet",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PERSONNEL MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_750",
        "category": "tvet",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_751",
        "category": "tvet",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_752",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_753",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_754",
        "category": "tvet",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_755",
        "category": "tvet",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_756",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_757",
        "category": "tvet",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_758",
        "category": "tvet",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_759",
        "category": "tvet",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN HUMAN RESOURCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_760",
        "category": "tvet",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_761",
        "category": "tvet",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_762",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_763",
        "category": "tvet",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_764",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_765",
        "category": "tvet",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_766",
        "category": "tvet",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_767",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_768",
        "category": "tvet",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_769",
        "category": "tvet",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_770",
        "category": "tvet",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_771",
        "category": "tvet",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_772",
        "category": "tvet",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_773",
        "category": "tvet",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_774",
        "category": "tvet",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_775",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_776",
        "category": "tvet",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_777",
        "category": "tvet",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_778",
        "category": "tvet",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_779",
        "category": "tvet",
        "level": "diploma",
        "school": "KARATINA UNIVERSITY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_780",
        "category": "tvet",
        "level": "diploma",
        "school": "EMINING TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_781",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_782",
        "category": "tvet",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_783",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_784",
        "category": "tvet",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_785",
        "category": "tvet",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_786",
        "category": "tvet",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_787",
        "category": "tvet",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_788",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_789",
        "category": "tvet",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_790",
        "category": "tvet",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_791",
        "category": "tvet",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_792",
        "category": "tvet",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_793",
        "category": "tvet",
        "level": "diploma",
        "school": "MACHAKOS TECHNICAL INSTITUTE FOR THE BLIND",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_794",
        "category": "tvet",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_795",
        "category": "tvet",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_796",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_797",
        "category": "tvet",
        "level": "diploma",
        "school": "GODOMA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_798",
        "category": "tvet",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_799",
        "category": "tvet",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_800",
        "category": "tvet",
        "level": "diploma",
        "school": "WERU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_801",
        "category": "tvet",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_802",
        "category": "tvet",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_803",
        "category": "tvet",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_804",
        "category": "tvet",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_805",
        "category": "tvet",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_806",
        "category": "tvet",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_807",
        "category": "tvet",
        "level": "diploma",
        "school": "NAIVASHA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_808",
        "category": "tvet",
        "level": "diploma",
        "school": "BAHATI INSTITUTE OF BUSINESS AND ADMINISTRATION",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_809",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA INDUSTRIAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_810",
        "category": "tvet",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_811",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHIOYA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_812",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_813",
        "category": "tvet",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_814",
        "category": "tvet",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_815",
        "category": "tvet",
        "level": "diploma",
        "school": "CHUKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_816",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_817",
        "category": "tvet",
        "level": "diploma",
        "school": "BORABU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_818",
        "category": "tvet",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_819",
        "category": "tvet",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_820",
        "category": "tvet",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_821",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPIPIRI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_822",
        "category": "tvet",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_823",
        "category": "tvet",
        "level": "diploma",
        "school": "MANDERA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_824",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHIRA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_825",
        "category": "tvet",
        "level": "diploma",
        "school": "OKAME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_826",
        "category": "tvet",
        "level": "diploma",
        "school": "RUNYENJES TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_827",
        "category": "tvet",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_828",
        "category": "tvet",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_829",
        "category": "tvet",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_830",
        "category": "tvet",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_831",
        "category": "tvet",
        "level": "diploma",
        "school": "KIMININI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_832",
        "category": "tvet",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_833",
        "category": "tvet",
        "level": "diploma",
        "school": "SEME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_834",
        "category": "tvet",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_835",
        "category": "tvet",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_836",
        "category": "med",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_837",
        "category": "med",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_838",
        "category": "med",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_839",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_840",
        "category": "med",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_841",
        "category": "med",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_842",
        "category": "med",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_843",
        "category": "med",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_844",
        "category": "med",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_845",
        "category": "med",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_846",
        "category": "med",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN PHARMACEUTICAL TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_847",
        "category": "eng",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CHEMICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_848",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN CHEMICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_849",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CHEMICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_850",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CHEMICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_851",
        "category": "eng",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CHEMICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_852",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN CHEMICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_853",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN CHEMICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_854",
        "category": "eng",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_855",
        "category": "eng",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_856",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_857",
        "category": "eng",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_858",
        "category": "eng",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_859",
        "category": "eng",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_860",
        "category": "eng",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_861",
        "category": "eng",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_862",
        "category": "eng",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_863",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_864",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_865",
        "category": "eng",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_866",
        "category": "eng",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_867",
        "category": "eng",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_868",
        "category": "eng",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING(PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_869",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_870",
        "category": "eng",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_871",
        "category": "eng",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_872",
        "category": "eng",
        "level": "diploma",
        "school": "MURANGA UNIVERSITY OF TECHNOLOGY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_873",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_874",
        "category": "eng",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_875",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_876",
        "category": "eng",
        "level": "diploma",
        "school": "ST JOSEPH'S TECHNICAL INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING(PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_877",
        "category": "eng",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_878",
        "category": "eng",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_879",
        "category": "eng",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_880",
        "category": "eng",
        "level": "diploma",
        "school": "NAIVASHA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_881",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INDUSTRIAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING(PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_882",
        "category": "eng",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_883",
        "category": "eng",
        "level": "diploma",
        "school": "CHUKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_884",
        "category": "eng",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_885",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_886",
        "category": "eng",
        "level": "diploma",
        "school": "GATANGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_887",
        "category": "eng",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING(PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_888",
        "category": "eng",
        "level": "diploma",
        "school": "LAIKIPIA NORTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_889",
        "category": "eng",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_890",
        "category": "eng",
        "level": "diploma",
        "school": "KIMASIAN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_891",
        "category": "eng",
        "level": "diploma",
        "school": "ELDAMA RAVINE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_892",
        "category": "eng",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (PRODUCTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_893",
        "category": "eng",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (INSTRUMENTATION & CONTROL)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_894",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (INSTRUMENTATION & CONTROL)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_895",
        "category": "eng",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ELECTRONICS (INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_896",
        "category": "eng",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_897",
        "category": "eng",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (INSTRUMENTATION & CONTROL)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_898",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_899",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL (INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_900",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (CONTROL & INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_901",
        "category": "eng",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_902",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (CONTROL & INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_903",
        "category": "eng",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (INSTRUMENTATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_904",
        "category": "eng",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (CONTROL & INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_905",
        "category": "eng",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (INSTRUMENTATION OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_906",
        "category": "eng",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (INSTRUMENTATION & CONTROL)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_907",
        "category": "eng",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (INSTRUMENTATION & CONTROL)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_908",
        "category": "eng",
        "level": "diploma",
        "school": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (INSTRUMENTATION & CONTROL)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_909",
        "category": "eng",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (CONTROL & INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_910",
        "category": "eng",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (CONTROL & INSTRUMENTATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_911",
        "category": "med",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_912",
        "category": "med",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_913",
        "category": "med",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_914",
        "category": "med",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_915",
        "category": "med",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_916",
        "category": "med",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_917",
        "category": "med",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_918",
        "category": "med",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_919",
        "category": "med",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_920",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_921",
        "category": "eng",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS TECHNOLOGY (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_922",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONIC TECHNOLOGY (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_923",
        "category": "eng",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONIC TECHNOLOGY (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_924",
        "category": "eng",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS TECHNOLOGY (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_925",
        "category": "eng",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_926",
        "category": "eng",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_927",
        "category": "eng",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS TECHNOLOGY (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_928",
        "category": "eng",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS TECHNOLOGY (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_929",
        "category": "eng",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONIC TECHNOLOGY (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_930",
        "category": "eng",
        "level": "diploma",
        "school": "BORABU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS TECHNOLOGY (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_931",
        "category": "eng",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS TECHNOLOGY (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_932",
        "category": "tvet",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PETROLEUM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_933",
        "category": "sci",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN PETROLEUM AND GEOSCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_934",
        "category": "sci",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PETROLEUM AND GEOSCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_935",
        "category": "sci",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN PETROLEUM GEOSCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_936",
        "category": "sci",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PETROLEUM AND GEOSCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_937",
        "category": "sci",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN PETROLEUM AND GEOSCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_938",
        "category": "sci",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN PETROLEUM AND GEOSCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_939",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN PETROLEUM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_940",
        "category": "sci",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN PETROLEUM AND GEOSCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_941",
        "category": "soc",
        "level": "diploma",
        "school": "NAIROBI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ENTREPRENEURSHIP DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_942",
        "category": "agri",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_943",
        "category": "soc",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN ENTREPRENEURSHIP DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_944",
        "category": "soc",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN ENTREPRENEURSHIP DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_945",
        "category": "soc",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ENTREPRENEURSHIP DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_946",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN ENTREPRENEURSHIP",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_947",
        "category": "agri",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_948",
        "category": "agri",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_949",
        "category": "agri",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_950",
        "category": "agri",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_951",
        "category": "soc",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN ENTREPRENEURSHIP DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_952",
        "category": "soc",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN ENTREPRENEURSHIP DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_953",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN ENTREPRENEURSHIP",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_954",
        "category": "agri",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_955",
        "category": "tvet",
        "level": "diploma",
        "school": "ST JOSEPH'S TECHNICAL INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN ENTREPRENEURSHIP",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_956",
        "category": "tvet",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ENTREPRENEURSHIP",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_957",
        "category": "tvet",
        "level": "diploma",
        "school": "MACHAKOS TECHNICAL INSTITUTE FOR THE BLIND",
        "name": "DIPLOMA IN ENTREPRENEURSHIP",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_958",
        "category": "biz",
        "level": "diploma",
        "school": "BUKURA AGRICULTURAL COLLEGE",
        "name": "DIPLOMA IN FARM BUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_959",
        "category": "soc",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ENTREPRENEURSHIP DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_960",
        "category": "tvet",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ENTREPRENEURSHIP",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_961",
        "category": "agri",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_962",
        "category": "agri",
        "level": "diploma",
        "school": "SIKRI TECHNICAL TRAINING INSTITUTE FOR THE BLIND AND",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_963",
        "category": "agri",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_964",
        "category": "agri",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_965",
        "category": "agri",
        "level": "diploma",
        "school": "KAJIADO WEST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_966",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_967",
        "category": "agri",
        "level": "diploma",
        "school": "KIPTARAGON TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ENTREPRENEURIAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_968",
        "category": "tvet",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_969",
        "category": "beauty",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN & GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_970",
        "category": "beauty",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN FASHION DESIGN AND GARMENT MAKING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_971",
        "category": "tvet",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_972",
        "category": "tvet",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CLOTHING & TEXTILE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_973",
        "category": "beauty",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_974",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_975",
        "category": "beauty",
        "level": "diploma",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_976",
        "category": "tvet",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CLOTHING & TEXTILE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_977",
        "category": "beauty",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_978",
        "category": "beauty",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN AND GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_979",
        "category": "beauty",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_980",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_981",
        "category": "beauty",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_982",
        "category": "beauty",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_983",
        "category": "tvet",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_984",
        "category": "beauty",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN FASHION DESIGN & GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_985",
        "category": "beauty",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION & GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_986",
        "category": "tvet",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_987",
        "category": "beauty",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_988",
        "category": "beauty",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN FASHION DESIGN AND CLOTHING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_989",
        "category": "beauty",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_990",
        "category": "beauty",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_991",
        "category": "beauty",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN & GARMENT MAKING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_992",
        "category": "beauty",
        "level": "diploma",
        "school": "ST JOSEPH'S TECHNICAL INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN FASHION DESIGN AND GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_993",
        "category": "tvet",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_994",
        "category": "tvet",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "Diploma in Fasion Design and Garment Making Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_995",
        "category": "beauty",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN FASHION DESIGN & GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_996",
        "category": "beauty",
        "level": "diploma",
        "school": "MACHAKOS TECHNICAL INSTITUTE FOR THE BLIND",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_997",
        "category": "beauty",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION & GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_998",
        "category": "beauty",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION & GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_999",
        "category": "beauty",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1000",
        "category": "beauty",
        "level": "diploma",
        "school": "KENYA INDUSTRIAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1001",
        "category": "beauty",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN AND GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1002",
        "category": "beauty",
        "level": "diploma",
        "school": "SIKRI TECHNICAL TRAINING INSTITUTE FOR THE BLIND AND",
        "name": "DIPLOMA IN FASHION DESIGN & CLOTHING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1003",
        "category": "beauty",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FASHION DESIGN & GARMENT MAKING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1004",
        "category": "beauty",
        "level": "diploma",
        "school": "BORABU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FASHION DESIGN AND GARMENT MAKING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1005",
        "category": "beauty",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FASHION DESIGN AND GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1006",
        "category": "tvet",
        "level": "diploma",
        "school": "KIENI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma in Fasion Design and Garment Making Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1007",
        "category": "beauty",
        "level": "diploma",
        "school": "KIMININI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN FASHION DESIGN & GARMENT MAKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1008",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1009",
        "category": "eng",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1010",
        "category": "eng",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1011",
        "category": "eng",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1012",
        "category": "eng",
        "level": "diploma",
        "school": "SAMBURU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1013",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1014",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1015",
        "category": "eng",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1016",
        "category": "eng",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1017",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1018",
        "category": "eng",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1019",
        "category": "eng",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1020",
        "category": "eng",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1021",
        "category": "eng",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1022",
        "category": "eng",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1023",
        "category": "eng",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1024",
        "category": "eng",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1025",
        "category": "eng",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1026",
        "category": "eng",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1027",
        "category": "eng",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1028",
        "category": "eng",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1029",
        "category": "eng",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1030",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1031",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1032",
        "category": "eng",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1033",
        "category": "eng",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1034",
        "category": "eng",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1035",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1036",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1037",
        "category": "eng",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1038",
        "category": "eng",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1039",
        "category": "eng",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1040",
        "category": "eng",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1041",
        "category": "eng",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1042",
        "category": "eng",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1043",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1044",
        "category": "eng",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1045",
        "category": "eng",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1046",
        "category": "eng",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1047",
        "category": "eng",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1048",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1049",
        "category": "eng",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1050",
        "category": "eng",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1051",
        "category": "eng",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1052",
        "category": "eng",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1053",
        "category": "eng",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1054",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1055",
        "category": "eng",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1056",
        "category": "eng",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1057",
        "category": "eng",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1058",
        "category": "eng",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1059",
        "category": "eng",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1060",
        "category": "eng",
        "level": "diploma",
        "school": "GODOMA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1061",
        "category": "eng",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1062",
        "category": "eng",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1063",
        "category": "eng",
        "level": "diploma",
        "school": "KAPCHEROP TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1064",
        "category": "eng",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1065",
        "category": "eng",
        "level": "diploma",
        "school": "CHUKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1066",
        "category": "eng",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1067",
        "category": "eng",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1068",
        "category": "eng",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1069",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1070",
        "category": "eng",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING AND CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1071",
        "category": "eng",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1072",
        "category": "eng",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1073",
        "category": "eng",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1074",
        "category": "it",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1075",
        "category": "it",
        "level": "diploma",
        "school": "GODOMA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1076",
        "category": "it",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1077",
        "category": "it",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1078",
        "category": "it",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1079",
        "category": "it",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1080",
        "category": "it",
        "level": "diploma",
        "school": "KIPTARAGON TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1081",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1082",
        "category": "eng",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1083",
        "category": "eng",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1084",
        "category": "eng",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1085",
        "category": "eng",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1086",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1087",
        "category": "eng",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN ELECTRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1088",
        "category": "tvet",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BANKING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1089",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BANKING AND FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1090",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN BANKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1091",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN BANKING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1092",
        "category": "tvet",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BANKING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1093",
        "category": "tvet",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BANKING AND FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1094",
        "category": "tvet",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BANKING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1095",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BANKING AND FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1096",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN BANKING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1097",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN BANKING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1098",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BANKING AND FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1099",
        "category": "tvet",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BANKING AND FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1100",
        "category": "tvet",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN BANKING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1101",
        "category": "tvet",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BANKING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1102",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BANKING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1103",
        "category": "tvet",
        "level": "diploma",
        "school": "BAHATI INSTITUTE OF BUSINESS AND ADMINISTRATION",
        "name": "DIPLOMA IN BANKING AND FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1104",
        "category": "biz",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION/MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1105",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1106",
        "category": "biz",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1107",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1108",
        "category": "biz",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1109",
        "category": "biz",
        "level": "diploma",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1110",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1111",
        "category": "biz",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION/MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1112",
        "category": "biz",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1113",
        "category": "biz",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1114",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1115",
        "category": "biz",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION/MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1116",
        "category": "biz",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION/MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1117",
        "category": "biz",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION/MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1118",
        "category": "biz",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1119",
        "category": "biz",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1120",
        "category": "biz",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1121",
        "category": "biz",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION/MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1122",
        "category": "biz",
        "level": "diploma",
        "school": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1123",
        "category": "biz",
        "level": "diploma",
        "school": "BORABU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION/MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1124",
        "category": "biz",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION/MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1125",
        "category": "biz",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION/MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1126",
        "category": "biz",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUSINESS ADMINISTRATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1127",
        "category": "biz",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1128",
        "category": "biz",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1129",
        "category": "biz",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1130",
        "category": "biz",
        "level": "diploma",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1131",
        "category": "biz",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1132",
        "category": "biz",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1133",
        "category": "biz",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1134",
        "category": "biz",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1135",
        "category": "biz",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1136",
        "category": "biz",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1137",
        "category": "biz",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1138",
        "category": "biz",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMMUNITY DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1139",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MOTOR VEHICLE MECHANICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1140",
        "category": "eng",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MOTOR VEHICLE MECHANICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1141",
        "category": "eng",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MOTOR VEHICLE MECHANICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1142",
        "category": "eng",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MOTOR VEHICLE MECHANICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1143",
        "category": "eng",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MOTOR VEHICLE MECHANICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1144",
        "category": "arch",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1145",
        "category": "arch",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING & CONSTRUCTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1146",
        "category": "arch",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1147",
        "category": "arch",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1148",
        "category": "arch",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1149",
        "category": "eng",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING ENGINEERING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1150",
        "category": "arch",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1151",
        "category": "arch",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1152",
        "category": "arch",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1153",
        "category": "arch",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1154",
        "category": "arch",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1155",
        "category": "arch",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1156",
        "category": "arch",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1157",
        "category": "arch",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1158",
        "category": "arch",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1159",
        "category": "arch",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1160",
        "category": "arch",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1161",
        "category": "arch",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1162",
        "category": "arch",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1163",
        "category": "arch",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1164",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1165",
        "category": "arch",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1166",
        "category": "arch",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1167",
        "category": "arch",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN CONSTRUCTION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1168",
        "category": "arch",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1169",
        "category": "arch",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1170",
        "category": "arch",
        "level": "diploma",
        "school": "BUSHIANGALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1171",
        "category": "arch",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1172",
        "category": "arch",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1173",
        "category": "arch",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1174",
        "category": "arch",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1175",
        "category": "arch",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1176",
        "category": "arch",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1177",
        "category": "arch",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1178",
        "category": "arch",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1179",
        "category": "eng",
        "level": "diploma",
        "school": "MURANGA UNIVERSITY OF TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING ENGINEERING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1180",
        "category": "arch",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1181",
        "category": "arch",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1182",
        "category": "arch",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1183",
        "category": "arch",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1184",
        "category": "arch",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1185",
        "category": "arch",
        "level": "diploma",
        "school": "ST JOSEPH'S TECHNICAL INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1186",
        "category": "arch",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1187",
        "category": "arch",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1188",
        "category": "arch",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1189",
        "category": "arch",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1190",
        "category": "arch",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN BUILDING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1191",
        "category": "arch",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1192",
        "category": "arch",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1193",
        "category": "arch",
        "level": "diploma",
        "school": "MACHAKOS TECHNICAL INSTITUTE FOR THE BLIND",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1194",
        "category": "arch",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1195",
        "category": "arch",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1196",
        "category": "arch",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1197",
        "category": "arch",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1198",
        "category": "arch",
        "level": "diploma",
        "school": "WERU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1199",
        "category": "arch",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1200",
        "category": "arch",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1201",
        "category": "arch",
        "level": "diploma",
        "school": "KOSHIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1202",
        "category": "arch",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1203",
        "category": "arch",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1204",
        "category": "arch",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1205",
        "category": "arch",
        "level": "diploma",
        "school": "KENYA INDUSTRIAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1206",
        "category": "arch",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1207",
        "category": "arch",
        "level": "diploma",
        "school": "SIKRI TECHNICAL TRAINING INSTITUTE FOR THE BLIND AND",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1208",
        "category": "arch",
        "level": "diploma",
        "school": "KAPCHEROP TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1209",
        "category": "arch",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1210",
        "category": "arch",
        "level": "diploma",
        "school": "CHUKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1211",
        "category": "arch",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1212",
        "category": "arch",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1213",
        "category": "arch",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1214",
        "category": "arch",
        "level": "diploma",
        "school": "BUNYALA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1215",
        "category": "arch",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1216",
        "category": "arch",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1217",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1218",
        "category": "arch",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1219",
        "category": "arch",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1220",
        "category": "arch",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1221",
        "category": "arch",
        "level": "diploma",
        "school": "LAIKIPIA NORTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1222",
        "category": "arch",
        "level": "diploma",
        "school": "NDIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1223",
        "category": "arch",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1224",
        "category": "arch",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1225",
        "category": "arch",
        "level": "diploma",
        "school": "KIENI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1226",
        "category": "arch",
        "level": "diploma",
        "school": "KIMASIAN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1227",
        "category": "arch",
        "level": "diploma",
        "school": "KIMININI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING &  CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1228",
        "category": "arch",
        "level": "diploma",
        "school": "CHEPSIREI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1229",
        "category": "arch",
        "level": "diploma",
        "school": "KIPSOEN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING CONSTRUCTION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1230",
        "category": "arch",
        "level": "diploma",
        "school": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN BUILDING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1231",
        "category": "arch",
        "level": "diploma",
        "school": "SEME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1232",
        "category": "arch",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma Building Technology",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1233",
        "category": "eng",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1234",
        "category": "eng",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1235",
        "category": "eng",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1236",
        "category": "eng",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "Diploma in Electrical and Electronics Engineering (Power option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1237",
        "category": "eng",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1238",
        "category": "eng",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1239",
        "category": "eng",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING(POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1240",
        "category": "eng",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1241",
        "category": "eng",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1242",
        "category": "eng",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1243",
        "category": "eng",
        "level": "diploma",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1244",
        "category": "eng",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1245",
        "category": "eng",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1246",
        "category": "eng",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1247",
        "category": "eng",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING(POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1248",
        "category": "eng",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1249",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1250",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1251",
        "category": "eng",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1252",
        "category": "eng",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING(POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1253",
        "category": "eng",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL/ELECTRONIC ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1254",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1255",
        "category": "eng",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1256",
        "category": "eng",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING(POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1257",
        "category": "eng",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "Diploma in Electrical and Electronics Engineering (Power option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1258",
        "category": "eng",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1259",
        "category": "eng",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ELCTRICAL ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1260",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1261",
        "category": "eng",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1262",
        "category": "eng",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL/ELECTRONIC ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1263",
        "category": "eng",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1264",
        "category": "eng",
        "level": "diploma",
        "school": "MURANGA UNIVERSITY OF TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1265",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1266",
        "category": "eng",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING(POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1267",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1268",
        "category": "eng",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1269",
        "category": "eng",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1270",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1271",
        "category": "eng",
        "level": "diploma",
        "school": "ST JOSEPH'S TECHNICAL INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1272",
        "category": "eng",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING(POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1273",
        "category": "eng",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "Diploma in Electrical and Electronics Engineering (Power option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1274",
        "category": "eng",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1275",
        "category": "eng",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING(POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1276",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING(POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1277",
        "category": "eng",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1278",
        "category": "eng",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING(POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1279",
        "category": "eng",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1280",
        "category": "eng",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1281",
        "category": "eng",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING(POWER OPTION) -KNEC",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1282",
        "category": "eng",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1283",
        "category": "eng",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1284",
        "category": "eng",
        "level": "diploma",
        "school": "AHMED SHAHAME MWIDANI TECHNICAL TRAINING",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1285",
        "category": "eng",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1286",
        "category": "eng",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1287",
        "category": "eng",
        "level": "diploma",
        "school": "KOSHIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1288",
        "category": "eng",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1289",
        "category": "eng",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1290",
        "category": "eng",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1291",
        "category": "eng",
        "level": "diploma",
        "school": "SOTIK TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1292",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INDUSTRIAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1293",
        "category": "eng",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1294",
        "category": "eng",
        "level": "diploma",
        "school": "KAPCHEROP TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1295",
        "category": "eng",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1296",
        "category": "eng",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1297",
        "category": "eng",
        "level": "diploma",
        "school": "TAVETA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1298",
        "category": "eng",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "Diploma in Electrical and Electronics Engineering (Power option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1299",
        "category": "eng",
        "level": "diploma",
        "school": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL TECHNOLOGY (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1300",
        "category": "eng",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1301",
        "category": "eng",
        "level": "diploma",
        "school": "BUNYALA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1302",
        "category": "eng",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma in Electrical and Electronics Engineering (Power option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1303",
        "category": "eng",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1304",
        "category": "eng",
        "level": "diploma",
        "school": "KIPIPIRI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1305",
        "category": "eng",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1306",
        "category": "eng",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1307",
        "category": "eng",
        "level": "diploma",
        "school": "MANDERA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1308",
        "category": "eng",
        "level": "diploma",
        "school": "MURAGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1309",
        "category": "eng",
        "level": "diploma",
        "school": "NDIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma in Electrical and Electronics Engineering (Power option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1310",
        "category": "eng",
        "level": "diploma",
        "school": "OKAME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1311",
        "category": "eng",
        "level": "diploma",
        "school": "RUNYENJES TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1312",
        "category": "eng",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1313",
        "category": "eng",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1314",
        "category": "eng",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONICS ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1315",
        "category": "eng",
        "level": "diploma",
        "school": "KIMASIAN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1316",
        "category": "eng",
        "level": "diploma",
        "school": "ELDAMA RAVINE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1317",
        "category": "eng",
        "level": "diploma",
        "school": "CHEPSIREI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "Diploma in Electrical and Electronics Engineering (Power option)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1318",
        "category": "eng",
        "level": "diploma",
        "school": "KIPSOEN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1319",
        "category": "eng",
        "level": "diploma",
        "school": "SAMBURU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1320",
        "category": "eng",
        "level": "diploma",
        "school": "SEME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL & ELECTRONIC ENGINEERING (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1321",
        "category": "eng",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS (POWER OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1322",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1323",
        "category": "tvet",
        "level": "diploma",
        "school": "KIIRUA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1324",
        "category": "tvet",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1325",
        "category": "tvet",
        "level": "diploma",
        "school": "ST JOSEPH'S TECHNICAL INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1326",
        "category": "tvet",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1327",
        "category": "tvet",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1328",
        "category": "tvet",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1329",
        "category": "tvet",
        "level": "diploma",
        "school": "KAJIADO WEST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1330",
        "category": "tvet",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1331",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHIRA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1332",
        "category": "tvet",
        "level": "diploma",
        "school": "NACHU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1333",
        "category": "tvet",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1334",
        "category": "tvet",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1335",
        "category": "tvet",
        "level": "diploma",
        "school": "KIMASIAN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN WELDING AND FABRICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1336",
        "category": "biz",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1337",
        "category": "biz",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1338",
        "category": "biz",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1339",
        "category": "biz",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1340",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1341",
        "category": "biz",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ACCOUNTANT TECHNICIAN",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1342",
        "category": "biz",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1343",
        "category": "biz",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "ACCOUNTING TECHNICIAN DIPLOMA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1344",
        "category": "biz",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1345",
        "category": "biz",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN  ACCOUNTANTS TECHNICIANS DIPLOMA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1346",
        "category": "biz",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN ACCOUNTING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1347",
        "category": "biz",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA ACCOUNTING TECHNICIAN",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1348",
        "category": "biz",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1349",
        "category": "biz",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1350",
        "category": "biz",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1351",
        "category": "biz",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1352",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1353",
        "category": "biz",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1354",
        "category": "biz",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1355",
        "category": "biz",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1356",
        "category": "biz",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1357",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1358",
        "category": "biz",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1359",
        "category": "biz",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1360",
        "category": "biz",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "ACCOUNTING TECHNICIAN DIPLOMA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1361",
        "category": "biz",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1362",
        "category": "biz",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1363",
        "category": "biz",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1364",
        "category": "biz",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA ACCOUNTING TECHNICIAN 1",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1365",
        "category": "biz",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "ACCOUNTING TECHNICIAN DIPLOMA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1366",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1367",
        "category": "biz",
        "level": "diploma",
        "school": "MATILI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA ACCOUNTING TECHNICIAN2",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1368",
        "category": "biz",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1369",
        "category": "biz",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "ACCOUNTING TECHNICIAN DIPLOMA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1370",
        "category": "biz",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1371",
        "category": "biz",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1372",
        "category": "biz",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1373",
        "category": "biz",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1374",
        "category": "biz",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA ACCOUNTING TECHNICIAN",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1375",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1376",
        "category": "biz",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1377",
        "category": "biz",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "ACCOUNTING TECHNICIAN DIPLOMA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1378",
        "category": "biz",
        "level": "diploma",
        "school": "AHMED SHAHAME MWIDANI TECHNICAL TRAINING",
        "name": "DIPLOMA IN ACCOUNTING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1379",
        "category": "biz",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1380",
        "category": "biz",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1381",
        "category": "biz",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1382",
        "category": "biz",
        "level": "diploma",
        "school": "KOSHIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1383",
        "category": "biz",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTING TECHNICIANS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1384",
        "category": "biz",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1385",
        "category": "biz",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTING & FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1386",
        "category": "biz",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTING TECHNICIANS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1387",
        "category": "biz",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTING TECHNICIANS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1388",
        "category": "biz",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA ACCOUNTING TECHNICIAN 1",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1389",
        "category": "biz",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1390",
        "category": "biz",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "ACCOUNTING TECHNICIAN DIPLOMA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1391",
        "category": "biz",
        "level": "diploma",
        "school": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1392",
        "category": "biz",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1393",
        "category": "biz",
        "level": "diploma",
        "school": "GATANGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA ACCOUNTING TECHNICIAN 1",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1394",
        "category": "biz",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1395",
        "category": "biz",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1396",
        "category": "biz",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1397",
        "category": "biz",
        "level": "diploma",
        "school": "LAIKIPIA NORTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1398",
        "category": "biz",
        "level": "diploma",
        "school": "MANDERA TECHNICAL TRAINING INSTITUTE",
        "name": "ACCOUNTING TECHNICIAN DIPLOMA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1399",
        "category": "biz",
        "level": "diploma",
        "school": "OKAME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "ACCOUNTING TECHNICIAN DIPLOMA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1400",
        "category": "biz",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1401",
        "category": "biz",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1402",
        "category": "biz",
        "level": "diploma",
        "school": "KIPTARAGON TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1403",
        "category": "biz",
        "level": "diploma",
        "school": "CHEPSIREI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ACCOUNTANCY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1404",
        "category": "biz",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1405",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1406",
        "category": "biz",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1407",
        "category": "biz",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1408",
        "category": "biz",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1409",
        "category": "biz",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1410",
        "category": "hosp",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN CATERING AND HOTEL MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1411",
        "category": "biz",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1412",
        "category": "biz",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1413",
        "category": "biz",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1414",
        "category": "biz",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1415",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1416",
        "category": "biz",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1417",
        "category": "biz",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1418",
        "category": "biz",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1419",
        "category": "biz",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1420",
        "category": "biz",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1421",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1422",
        "category": "biz",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1423",
        "category": "biz",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1424",
        "category": "biz",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1425",
        "category": "biz",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1426",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1427",
        "category": "biz",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1428",
        "category": "biz",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1429",
        "category": "biz",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1430",
        "category": "biz",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1431",
        "category": "biz",
        "level": "diploma",
        "school": "CENTRE FOR TOURISM TRAINING AND RESEARCH",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1432",
        "category": "biz",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1433",
        "category": "biz",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1434",
        "category": "biz",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CATERING & ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1435",
        "category": "agri",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1436",
        "category": "agri",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1437",
        "category": "agri",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1438",
        "category": "agri",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1439",
        "category": "agri",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1440",
        "category": "agri",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1441",
        "category": "agri",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1442",
        "category": "agri",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1443",
        "category": "agri",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1444",
        "category": "agri",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1445",
        "category": "agri",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1446",
        "category": "agri",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1447",
        "category": "agri",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1448",
        "category": "agri",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1449",
        "category": "agri",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1450",
        "category": "agri",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1451",
        "category": "agri",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1452",
        "category": "agri",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1453",
        "category": "agri",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1454",
        "category": "agri",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1455",
        "category": "agri",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1456",
        "category": "agri",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1457",
        "category": "agri",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1458",
        "category": "agri",
        "level": "diploma",
        "school": "KARATINA UNIVERSITY",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1459",
        "category": "agri",
        "level": "diploma",
        "school": "EMINING TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1460",
        "category": "agri",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1461",
        "category": "agri",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1462",
        "category": "agri",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1463",
        "category": "agri",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1464",
        "category": "agri",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1465",
        "category": "agri",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1466",
        "category": "agri",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1467",
        "category": "agri",
        "level": "diploma",
        "school": "MUKURWEINI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1468",
        "category": "agri",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1469",
        "category": "agri",
        "level": "diploma",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1470",
        "category": "agri",
        "level": "diploma",
        "school": "BUKURA AGRICULTURAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURE , HUMAN ECOLOGY AND CONSUMER SCIENCE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1471",
        "category": "agri",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1472",
        "category": "agri",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1473",
        "category": "agri",
        "level": "diploma",
        "school": "KOSHIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1474",
        "category": "agri",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1475",
        "category": "agri",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1476",
        "category": "agri",
        "level": "diploma",
        "school": "SOTIK TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1477",
        "category": "agri",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1478",
        "category": "agri",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1479",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1480",
        "category": "agri",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1481",
        "category": "agri",
        "level": "diploma",
        "school": "CHUKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1482",
        "category": "agri",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1483",
        "category": "agri",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1484",
        "category": "agri",
        "level": "diploma",
        "school": "BUNYALA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1485",
        "category": "agri",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1486",
        "category": "agri",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1487",
        "category": "agri",
        "level": "diploma",
        "school": "LAIKIPIA NORTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1488",
        "category": "agri",
        "level": "diploma",
        "school": "MURAGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1489",
        "category": "agri",
        "level": "diploma",
        "school": "OKAME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1490",
        "category": "agri",
        "level": "diploma",
        "school": "RUNYENJES TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1491",
        "category": "agri",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1492",
        "category": "agri",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1493",
        "category": "agri",
        "level": "diploma",
        "school": "KIMASIAN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1494",
        "category": "agri",
        "level": "diploma",
        "school": "KIPTARAGON TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1495",
        "category": "agri",
        "level": "diploma",
        "school": "CHEPSIREI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1496",
        "category": "agri",
        "level": "diploma",
        "school": "KIPSOEN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN GENERAL AGRICULTURE",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1497",
        "category": "tvet",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1498",
        "category": "tvet",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1499",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1500",
        "category": "tvet",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1501",
        "category": "tvet",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1502",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1503",
        "category": "soc",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN COOPERATIVE DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1504",
        "category": "tvet",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1505",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1506",
        "category": "soc",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COOPERATIVE DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1507",
        "category": "tvet",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1508",
        "category": "tvet",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1509",
        "category": "tvet",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1510",
        "category": "tvet",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1511",
        "category": "tvet",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1512",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1513",
        "category": "tvet",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1514",
        "category": "soc",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN COOPERATIVE DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1515",
        "category": "tvet",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1516",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1517",
        "category": "tvet",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1518",
        "category": "tvet",
        "level": "diploma",
        "school": "MURANGA UNIVERSITY OF TECHNOLOGY",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1519",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1520",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1521",
        "category": "tvet",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1522",
        "category": "tvet",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1523",
        "category": "tvet",
        "level": "diploma",
        "school": "NAIVASHA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1524",
        "category": "tvet",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1525",
        "category": "tvet",
        "level": "diploma",
        "school": "MATHIOYA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1526",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1527",
        "category": "tvet",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1528",
        "category": "tvet",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1529",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CO-OPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1530",
        "category": "tvet",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1531",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPIPIRI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1532",
        "category": "tvet",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1533",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1534",
        "category": "tvet",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1535",
        "category": "tvet",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1536",
        "category": "tvet",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1537",
        "category": "tvet",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COOPERATIVE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1538",
        "category": "it",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1539",
        "category": "it",
        "level": "diploma",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1540",
        "category": "it",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1541",
        "category": "it",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1542",
        "category": "it",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1543",
        "category": "it",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1544",
        "category": "biz",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CERTIFIED INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1545",
        "category": "it",
        "level": "diploma",
        "school": "KIBABII UNIVERSITY",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1546",
        "category": "it",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1547",
        "category": "it",
        "level": "diploma",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1548",
        "category": "it",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1549",
        "category": "it",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1550",
        "category": "it",
        "level": "diploma",
        "school": "KARATINA UNIVERSITY",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1551",
        "category": "it",
        "level": "diploma",
        "school": "MURANGA UNIVERSITY OF TECHNOLOGY",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1552",
        "category": "it",
        "level": "diploma",
        "school": "CATHOLIC UNIVERSITY OF EAST AFRICA",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1553",
        "category": "it",
        "level": "diploma",
        "school": "MACHAKOS TECHNICAL INSTITUTE FOR THE BLIND",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1554",
        "category": "it",
        "level": "diploma",
        "school": "KENYA INDUSTRIAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1555",
        "category": "it",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1556",
        "category": "biz",
        "level": "diploma",
        "school": "TAVETA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CERTIFIED INFORMATION COMMUNICATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1557",
        "category": "it",
        "level": "diploma",
        "school": "KAJIADO WEST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1558",
        "category": "it",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1559",
        "category": "it",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1560",
        "category": "tvet",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1561",
        "category": "tvet",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1562",
        "category": "tvet",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1563",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1564",
        "category": "tvet",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1565",
        "category": "tvet",
        "level": "diploma",
        "school": "RWIKA TECHNICAL INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1566",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1567",
        "category": "tvet",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1568",
        "category": "tvet",
        "level": "diploma",
        "school": "MASAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1569",
        "category": "tvet",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1570",
        "category": "tvet",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1571",
        "category": "tvet",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1572",
        "category": "tvet",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1573",
        "category": "tvet",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1574",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1575",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1576",
        "category": "it",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN SECRETARIAL STUDIES (COMPUTERISED)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1577",
        "category": "tvet",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1578",
        "category": "tvet",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1579",
        "category": "tvet",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1580",
        "category": "tvet",
        "level": "diploma",
        "school": "WOTE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1581",
        "category": "tvet",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1582",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1583",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1584",
        "category": "tvet",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1585",
        "category": "tvet",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1586",
        "category": "tvet",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1587",
        "category": "tvet",
        "level": "diploma",
        "school": "KAREN TECHNICAL TRAINING INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1588",
        "category": "tvet",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1589",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1590",
        "category": "tvet",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1591",
        "category": "tvet",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1592",
        "category": "tvet",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1593",
        "category": "it",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES (COMPUTERISED)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1594",
        "category": "tvet",
        "level": "diploma",
        "school": "SOTIK TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1595",
        "category": "it",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES (COMPUTERISED)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1596",
        "category": "tvet",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1597",
        "category": "tvet",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1598",
        "category": "tvet",
        "level": "diploma",
        "school": "OKAME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1599",
        "category": "tvet",
        "level": "diploma",
        "school": "KIMASIAN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1600",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPTARAGON TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1601",
        "category": "tvet",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1602",
        "category": "eng",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1603",
        "category": "eng",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1604",
        "category": "eng",
        "level": "diploma",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1605",
        "category": "eng",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1606",
        "category": "eng",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1607",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1608",
        "category": "eng",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1609",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1610",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1611",
        "category": "eng",
        "level": "diploma",
        "school": "ST JOSEPH'S TECHNICAL INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1612",
        "category": "eng",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1613",
        "category": "eng",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1614",
        "category": "eng",
        "level": "diploma",
        "school": "KAPCHEROP TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1615",
        "category": "eng",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1616",
        "category": "eng",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHANICAL ENGINEERING (AUTOMOTIVE OPTION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1617",
        "category": "it",
        "level": "diploma",
        "school": "SHAMBERERE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1618",
        "category": "it",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1619",
        "category": "it",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1620",
        "category": "it",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1621",
        "category": "it",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1622",
        "category": "it",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1623",
        "category": "it",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1624",
        "category": "it",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1625",
        "category": "it",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1626",
        "category": "it",
        "level": "diploma",
        "school": "KENYA TECHNICAL TRAINERS COLLEGE",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1627",
        "category": "it",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1628",
        "category": "it",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1629",
        "category": "it",
        "level": "diploma",
        "school": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1630",
        "category": "tvet",
        "level": "diploma",
        "school": "FRIENDS COLLEGE KAIMOSI",
        "name": "DIPLOMA IN DIETETICS MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1631",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN DIETETICS MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1632",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1633",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1634",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN NUTRITION AND DIET MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1635",
        "category": "biz",
        "level": "diploma",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "DIPLOMA IN COMMUNITY NUTRITION",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1636",
        "category": "tvet",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN NUTRITION AND DIET MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1637",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN NUTRITION AND DIET MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1638",
        "category": "biz",
        "level": "diploma",
        "school": "NKABUNE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CATERING AND ACCOMMODATION MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1639",
        "category": "tvet",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN NUTRITION & DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1640",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN NUTRITION & DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1641",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN NUTRITION & DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1642",
        "category": "tvet",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN NUTRITION & DIETETICS",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1643",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN NUTRITION & DIETETICS",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1644",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN NUTRITION & DIETETICS",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1645",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN NUTRITION & DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1646",
        "category": "tvet",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN NUTRITION & DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1647",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN NUTRITION & DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1648",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN NUTRITION & DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1649",
        "category": "tvet",
        "level": "diploma",
        "school": "MICHUKI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN NUTRITION & DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1650",
        "category": "agri",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN FOOD NUTRITION & DIETETICS",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1651",
        "category": "tvet",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN NUTRITION & DIETETIC MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_1652",
        "category": "tvet",
        "level": "diploma",
        "school": "BARINGO TECHNICAL COLLEGE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1653",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1654",
        "category": "tvet",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1655",
        "category": "tvet",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1656",
        "category": "tvet",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1657",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1658",
        "category": "tvet",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1659",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1660",
        "category": "tvet",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1661",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1662",
        "category": "tvet",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1663",
        "category": "tvet",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1664",
        "category": "tvet",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1665",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1666",
        "category": "tvet",
        "level": "diploma",
        "school": "BONDO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1667",
        "category": "tvet",
        "level": "diploma",
        "school": "ALDAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1668",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF SURVEYING AND MAPPING",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1669",
        "category": "tvet",
        "level": "diploma",
        "school": "REGIONAL CENTRE FOR MAPPING OF RESOURCES FOR",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1670",
        "category": "tvet",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1671",
        "category": "tvet",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1672",
        "category": "tvet",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1673",
        "category": "tvet",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1674",
        "category": "tvet",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1675",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1676",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPSOEN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1677",
        "category": "tvet",
        "level": "diploma",
        "school": "SEME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN LAND SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_1678",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1679",
        "category": "tvet",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1680",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1681",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1682",
        "category": "tvet",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1683",
        "category": "tvet",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1684",
        "category": "tvet",
        "level": "diploma",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1685",
        "category": "tvet",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1686",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1687",
        "category": "tvet",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1688",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1689",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1690",
        "category": "tvet",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1691",
        "category": "tvet",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1692",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1693",
        "category": "tvet",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1694",
        "category": "tvet",
        "level": "diploma",
        "school": "MUKURWEINI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1695",
        "category": "tvet",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1696",
        "category": "tvet",
        "level": "diploma",
        "school": "SEME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ARCHITECTURE",
        "cutoff": 0,
        "requirements": {
            "a": 6
        }
    },
    {
        "id": "dip_1697",
        "category": "arch",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1698",
        "category": "arch",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1699",
        "category": "arch",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1700",
        "category": "arch",
        "level": "diploma",
        "school": "SIGALAGALA NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1701",
        "category": "arch",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1702",
        "category": "arch",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1703",
        "category": "arch",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1704",
        "category": "arch",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1705",
        "category": "arch",
        "level": "diploma",
        "school": "RAMOGI INSTITUTE OF ADVANCE TECHNOLOGY",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1706",
        "category": "arch",
        "level": "diploma",
        "school": "THIKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1707",
        "category": "arch",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1708",
        "category": "arch",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1709",
        "category": "arch",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN QUANTITY SURVEY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1710",
        "category": "arch",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1711",
        "category": "arch",
        "level": "diploma",
        "school": "MUKURWEINI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN QUANTITY SURVEY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1712",
        "category": "arch",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1713",
        "category": "arch",
        "level": "diploma",
        "school": "GATUNDU SOUTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN QUANTITY SURVEYING",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1714",
        "category": "hosp",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1715",
        "category": "hosp",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1716",
        "category": "hosp",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1717",
        "category": "hosp",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1718",
        "category": "hosp",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1719",
        "category": "hosp",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN  HOSPITALITY MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1720",
        "category": "hosp",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1721",
        "category": "hosp",
        "level": "diploma",
        "school": "KENYA WILDLIFE SERVICE TRAINING INSTITUTE",
        "name": "DIPLOMA IN TOURISM AND HOSPITALITY MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1722",
        "category": "hosp",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1723",
        "category": "hosp",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN TECHNOLOGY (TOURISM AND TRAVEL MANAGEMENT)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1724",
        "category": "hosp",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1725",
        "category": "hosp",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN  HOSPITALITY MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1726",
        "category": "hosp",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN TOURISM AND HOSPITALITY MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1727",
        "category": "hosp",
        "level": "diploma",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "DIPLOMA IN TOURISM AND HOSPITALITY MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1728",
        "category": "hosp",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1729",
        "category": "hosp",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1730",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1731",
        "category": "hosp",
        "level": "diploma",
        "school": "KARATINA UNIVERSITY",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1732",
        "category": "hosp",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1733",
        "category": "hosp",
        "level": "diploma",
        "school": "EAST AFRICAN SCHOOL OF AVIATION",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1734",
        "category": "hosp",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1735",
        "category": "hosp",
        "level": "diploma",
        "school": "CENTRE FOR TOURISM TRAINING AND RESEARCH",
        "name": "DIPLOMA IN TOUR GUIDING MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1736",
        "category": "hosp",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1737",
        "category": "hosp",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN TOURISM MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1738",
        "category": "med",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN ENVIROMENTAL HEALTH SCIENCES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1739",
        "category": "med",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN ENVIROMENTAL HEALTH SCIENCES",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1740",
        "category": "med",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN MEDICAL LABORATORY SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1741",
        "category": "med",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN MEDICAL LABORATORY SCIENCE",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1742",
        "category": "med",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL LABORATORY SCIENCE",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1743",
        "category": "med",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1744",
        "category": "med",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1745",
        "category": "med",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL LABORATORY SCIENCES",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1746",
        "category": "eng",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1747",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1748",
        "category": "eng",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1749",
        "category": "eng",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1750",
        "category": "eng",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1751",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1752",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1753",
        "category": "eng",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1754",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1755",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1756",
        "category": "eng",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1757",
        "category": "eng",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1758",
        "category": "eng",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN MARINE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1759",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN MARINE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1760",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN PUBLIC RELATIONS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1761",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN PUBLIC RELATIONS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1762",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN PUBLIC RELATIONS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1763",
        "category": "tvet",
        "level": "diploma",
        "school": "KIBABII UNIVERSITY",
        "name": "DIPLOMA IN PUBLIC RELATIONS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1764",
        "category": "eng",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TECHNOLOGY MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1765",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN TECHNOLOGY MEDICAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1766",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN FRONT OFFICE OPERATIONS AND CUSTOMER CARE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1767",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN FRONT OFFICE OPERATIONS AND CUSTOMER CARE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1768",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN SHIPPING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1769",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN SHIPPING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1770",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN SECRETARIAL STUDIES AND OFFICE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1771",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN SECRETARIAL STUDIES AND OFFICE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1772",
        "category": "tvet",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SECRETARIAL STUDIES AND OFFICE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1773",
        "category": "tvet",
        "level": "diploma",
        "school": "PROG CODE",
        "name": "INSTITUTION NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1774",
        "category": "tvet",
        "level": "diploma",
        "school": "1230854",
        "name": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1775",
        "category": "tvet",
        "level": "diploma",
        "school": "1625854",
        "name": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1776",
        "category": "tvet",
        "level": "diploma",
        "school": "1735854",
        "name": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1777",
        "category": "biz",
        "level": "diploma",
        "school": "1760854",
        "name": "BAHATI INSTITUTE OF BUSINESS AND ADMINISTRATION",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1778",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1779",
        "category": "tvet",
        "level": "diploma",
        "school": "3725854",
        "name": "KIPSINENDE TECHNICAL VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1780",
        "category": "tvet",
        "level": "diploma",
        "school": "1063855",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1781",
        "category": "tvet",
        "level": "diploma",
        "school": "1112855",
        "name": "TECHNICAL UNIVERSITY OF KENYA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1782",
        "category": "tvet",
        "level": "diploma",
        "school": "1244855",
        "name": "KARATINA UNIVERSITY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1783",
        "category": "tvet",
        "level": "diploma",
        "school": "1063857",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1784",
        "category": "tvet",
        "level": "diploma",
        "school": "1063859",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1785",
        "category": "tvet",
        "level": "diploma",
        "school": "2775859",
        "name": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1786",
        "category": "tvet",
        "level": "diploma",
        "school": "1063861",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1787",
        "category": "tvet",
        "level": "diploma",
        "school": "1101861",
        "name": "KITALE NATIONAL POLYTECHNIC",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1788",
        "category": "tvet",
        "level": "diploma",
        "school": "1112861",
        "name": "TECHNICAL UNIVERSITY OF KENYA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1789",
        "category": "tvet",
        "level": "diploma",
        "school": "1570861",
        "name": "TURKANA UNIVERSITY COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1790",
        "category": "tvet",
        "level": "diploma",
        "school": "1063862",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1791",
        "category": "tvet",
        "level": "diploma",
        "school": "1063863",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1792",
        "category": "tvet",
        "level": "diploma",
        "school": "1063865",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1793",
        "category": "tvet",
        "level": "diploma",
        "school": "1063867",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1794",
        "category": "tvet",
        "level": "diploma",
        "school": "1560867",
        "name": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1795",
        "category": "tvet",
        "level": "diploma",
        "school": "1063868",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1796",
        "category": "tvet",
        "level": "diploma",
        "school": "1063869",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1797",
        "category": "tvet",
        "level": "diploma",
        "school": "1063873",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1798",
        "category": "tvet",
        "level": "diploma",
        "school": "1244873",
        "name": "KARATINA UNIVERSITY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1799",
        "category": "tvet",
        "level": "diploma",
        "school": "1063874",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1800",
        "category": "tvet",
        "level": "diploma",
        "school": "1106874",
        "name": "RAILWAY TRAINING INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1801",
        "category": "tvet",
        "level": "diploma",
        "school": "1695874",
        "name": "KENYA SCHOOL OF REVENUE ADMINISTRATION",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1802",
        "category": "tvet",
        "level": "diploma",
        "school": "1063875",
        "name": "TECHNICAL UNIVERSITY OF MOMBASA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1803",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_1804",
        "category": "sci",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1805",
        "category": "sci",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1806",
        "category": "sci",
        "level": "diploma",
        "school": "KEROKA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1807",
        "category": "sci",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1808",
        "category": "sci",
        "level": "diploma",
        "school": "CATHOLIC UNIVERSITY OF EAST AFRICA",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1809",
        "category": "sci",
        "level": "diploma",
        "school": "KARUMO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1810",
        "category": "sci",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1811",
        "category": "sci",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1812",
        "category": "sci",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1813",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN GRAPHIC DESIGN",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1814",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN MASS COMMUNICATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1815",
        "category": "sci",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN SCIENCE LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1816",
        "category": "sci",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN SCIENCE LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1817",
        "category": "sci",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN SCIENCE LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1818",
        "category": "sci",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN SCIENCE LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1819",
        "category": "tvet",
        "level": "diploma",
        "school": "KENYA WATER INSTITUTE",
        "name": "DIPLOMA IN WATER AND WASTE WATER  LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1820",
        "category": "sci",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN SCIENCE LABORATORY TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1821",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF MOMBASA",
        "name": "DIPLOMA IN REFRIGERATION & AIR CONDITIONING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1822",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN REFRIGERATION & AIR CONDITIONING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1823",
        "category": "tvet",
        "level": "diploma",
        "school": "SAMBURU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN REFRIGERATION & AIR CONDITIONING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1824",
        "category": "med",
        "level": "diploma",
        "school": "KABETE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN HEALTH RECORDS AND INFORMATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1825",
        "category": "sci",
        "level": "diploma",
        "school": "KISII NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1826",
        "category": "sci",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1827",
        "category": "sci",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1828",
        "category": "sci",
        "level": "diploma",
        "school": "KATINE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1829",
        "category": "sci",
        "level": "diploma",
        "school": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1830",
        "category": "sci",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1831",
        "category": "sci",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1832",
        "category": "sci",
        "level": "diploma",
        "school": "KOSHIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1833",
        "category": "sci",
        "level": "diploma",
        "school": "BURETI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1834",
        "category": "sci",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1835",
        "category": "sci",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1836",
        "category": "sci",
        "level": "diploma",
        "school": "KASARANI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1837",
        "category": "sci",
        "level": "diploma",
        "school": "KIMASIAN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1838",
        "category": "sci",
        "level": "diploma",
        "school": "CHEPSIREI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN INFORMATION SCIENCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1839",
        "category": "eng",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN CIVIL ENGINEERING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1840",
        "category": "eng",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN CIVIL ENGINEERING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1841",
        "category": "eng",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1842",
        "category": "eng",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1843",
        "category": "eng",
        "level": "diploma",
        "school": "MUKIRIA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1844",
        "category": "eng",
        "level": "diploma",
        "school": "ST JOSEPH'S TECHNICAL INSTITUTE FOR THE DEAF",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1845",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1846",
        "category": "eng",
        "level": "diploma",
        "school": "KONOIN TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1847",
        "category": "eng",
        "level": "diploma",
        "school": "SIKRI TECHNICAL TRAINING INSTITUTE FOR THE BLIND AND",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1848",
        "category": "eng",
        "level": "diploma",
        "school": "KAPCHEROP TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1849",
        "category": "eng",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CIVIL ENGINEERING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1850",
        "category": "eng",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1851",
        "category": "eng",
        "level": "diploma",
        "school": "KIPSOEN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1852",
        "category": "eng",
        "level": "diploma",
        "school": "SEME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CIVIL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1853",
        "category": "it",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1854",
        "category": "it",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1855",
        "category": "it",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1856",
        "category": "it",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1857",
        "category": "it",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1858",
        "category": "it",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1859",
        "category": "it",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1860",
        "category": "it",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1861",
        "category": "it",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1862",
        "category": "it",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1863",
        "category": "it",
        "level": "diploma",
        "school": "TSEIKURU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1864",
        "category": "it",
        "level": "diploma",
        "school": "ZIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1865",
        "category": "it",
        "level": "diploma",
        "school": "BAHATI INSTITUTE OF BUSINESS AND ADMINISTRATION",
        "name": "DIPLOMA IN COMPUTER STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1866",
        "category": "hosp",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN TOUR GUIDING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1867",
        "category": "hosp",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN TOUR GUIDING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1868",
        "category": "hosp",
        "level": "diploma",
        "school": "CENTRE FOR TOURISM TRAINING AND RESEARCH",
        "name": "DIPLOMA IN TOUR GUIDING AND TRAVELS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1869",
        "category": "eng",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN MECHATRONIC ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1870",
        "category": "eng",
        "level": "diploma",
        "school": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN MECHATRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1871",
        "category": "eng",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MECHATRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1872",
        "category": "eng",
        "level": "diploma",
        "school": "AHMED SHAHAME MWIDANI TECHNICAL TRAINING",
        "name": "DIPLOMA IN MECHATRONIC ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1873",
        "category": "eng",
        "level": "diploma",
        "school": "KIPKABUS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHATRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1874",
        "category": "eng",
        "level": "diploma",
        "school": "OKAME TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHATRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1875",
        "category": "eng",
        "level": "diploma",
        "school": "MUMIAS WEST TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN MECHATRONICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1876",
        "category": "soc",
        "level": "diploma",
        "school": "COAST INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN EARLY CHILDHOOD DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1877",
        "category": "tvet",
        "level": "diploma",
        "school": "PC KINYANJUI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CHILD CARE AND PROTECTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1878",
        "category": "soc",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN EARLY CHILDHOOD DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1879",
        "category": "soc",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN EARLY CHILDHOOD DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1880",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN CHILD CARE AND PROTECTION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1881",
        "category": "soc",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN EARLY CHILDHOOD DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1882",
        "category": "biz",
        "level": "diploma",
        "school": "MATHENGE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN WATER TECHNOLOGY (WATER SUPPLY OPTION)",
        "cutoff": 0,
        "requirements": {
            "a": 4
        }
    },
    {
        "id": "dip_1883",
        "category": "biz",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN WATER TECHNOLOGY (WATER SUPPLY OPTION)",
        "cutoff": 0,
        "requirements": {
            "a": 4
        }
    },
    {
        "id": "dip_1884",
        "category": "biz",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN WATER TECHNOLOGY (WATER SUPPLY OPTION)",
        "cutoff": 0,
        "requirements": {
            "a": 4
        }
    },
    {
        "id": "dip_1885",
        "category": "biz",
        "level": "diploma",
        "school": "MUKURWEINI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN WATER TECHNOLOGY (WATER SUPPLY OPTION)",
        "cutoff": 0,
        "requirements": {
            "a": 4
        }
    },
    {
        "id": "dip_1886",
        "category": "biz",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN WATER TECHNOLOGY (WATER SUPPLY OPTION)",
        "cutoff": 0,
        "requirements": {
            "a": 4
        }
    },
    {
        "id": "dip_1887",
        "category": "tvet",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN WATER TECHNOLOGY",
        "cutoff": 0,
        "requirements": {
            "a": 4
        }
    },
    {
        "id": "dip_1888",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1889",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN GUIDANCE AND COUNSELLING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1890",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN GUIDANCE AND COUNSELLING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1891",
        "category": "tvet",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN GUIDANCE AND COUNSELLING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1892",
        "category": "tvet",
        "level": "diploma",
        "school": "BUMBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN GUIDANCE AND COUNSELLING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1893",
        "category": "tvet",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN GUIDANCE AND COUNSELLING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1894",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN GUIDANCE AND COUNSELLING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1895",
        "category": "trans",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TRANSPORT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1896",
        "category": "trans",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN TRANSPORT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1897",
        "category": "trans",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN ROAD TRANSPORT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1898",
        "category": "trans",
        "level": "diploma",
        "school": "RAILWAY TRAINING INSTITUTE",
        "name": "DIPLOMA IN ROAD TRANSPORT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1899",
        "category": "trans",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN TRANSPORT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1900",
        "category": "trans",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ROAD TRANSPORT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1901",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN HOUSEKEEPING AND LAUNDRY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1902",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN HOUSEKEEPING AND LAUNDRY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1903",
        "category": "tvet",
        "level": "diploma",
        "school": "MURANGA UNIVERSITY OF TECHNOLOGY",
        "name": "DIPLOMA IN HOUSEKEEPING MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1904",
        "category": "arch",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN CONSTRUCTION PLANT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1905",
        "category": "arch",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN CONSTRUCTION PLANT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1906",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN PLANT AND SERVICES ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1907",
        "category": "eng",
        "level": "diploma",
        "school": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "name": "DIPLOMA IN CONSTRUCTION PLANT ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1908",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN CREDIT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1909",
        "category": "tvet",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN CREDIT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1910",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN CREDIT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1911",
        "category": "tvet",
        "level": "diploma",
        "school": "MUKURWEINI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN CREDIT MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1912",
        "category": "agri",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN SUSTAINABLE AGRICULTURE AND RURAL DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1913",
        "category": "agri",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN SUSTAINABLE AGRICULTURE AND RURAL DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1914",
        "category": "eng",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AGRICULTURE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1915",
        "category": "eng",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1916",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1917",
        "category": "eng",
        "level": "diploma",
        "school": "KITALE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN AGRICULTURE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1918",
        "category": "eng",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AGRICULTURAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1919",
        "category": "eng",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AGRICULTURE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1920",
        "category": "eng",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN AGRICULTURE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1921",
        "category": "eng",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN AGRICULTURAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1922",
        "category": "eng",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1923",
        "category": "eng",
        "level": "diploma",
        "school": "ENDEBESS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN AGRICULTURE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1924",
        "category": "eng",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1925",
        "category": "eng",
        "level": "diploma",
        "school": "BUNYALA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1926",
        "category": "eng",
        "level": "diploma",
        "school": "EMSOS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURE ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1927",
        "category": "eng",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1928",
        "category": "eng",
        "level": "diploma",
        "school": "ELDAMA RAVINE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRICULTURAL ENGINEERING",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1929",
        "category": "med",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN PHARMACY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1930",
        "category": "med",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN PHARMACY",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_1931",
        "category": "it",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1932",
        "category": "it",
        "level": "diploma",
        "school": "KISUMU POLYTECHNIC",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1933",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1934",
        "category": "it",
        "level": "diploma",
        "school": "MERU NATIONAL POLYTECHNIC",
        "name": "DIPLOMAIN LIBRARY INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1935",
        "category": "it",
        "level": "diploma",
        "school": "KISIWA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMAIN LIBRARY INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1936",
        "category": "it",
        "level": "diploma",
        "school": "KAIBOI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1937",
        "category": "it",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMAIN LIBRARY INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1938",
        "category": "it",
        "level": "diploma",
        "school": "SANG'ALO INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN LIBRARY & INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1939",
        "category": "it",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMAIN LIBRARY INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1940",
        "category": "it",
        "level": "diploma",
        "school": "NYERI NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN LIBRARY & INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1941",
        "category": "it",
        "level": "diploma",
        "school": "RIFT VALLEY INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN LIBRARY & INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1942",
        "category": "it",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1943",
        "category": "it",
        "level": "diploma",
        "school": "MAASAI MARA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMAIN LIBRARY INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1944",
        "category": "it",
        "level": "diploma",
        "school": "SOT TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN LIBRARY & INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1945",
        "category": "it",
        "level": "diploma",
        "school": "SOTIK TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMAIN LIBRARY INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1946",
        "category": "it",
        "level": "diploma",
        "school": "TINDIRET TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMAIN LIBRARY INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1947",
        "category": "it",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMAIN LIBRARY INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1948",
        "category": "it",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN LIBRARY AND INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1949",
        "category": "it",
        "level": "diploma",
        "school": "KIMININI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMAIN LIBRARY INFORMATION STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1950",
        "category": "tvet",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN APPLIED STATISTICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1951",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN APPLIED STATISTICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1952",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN APPLIED STATISTICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1953",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN APPLIED STATISTICS",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1954",
        "category": "eng",
        "level": "diploma",
        "school": "KIAMBU INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS TECHNOLOGY (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1955",
        "category": "eng",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS TECHNOLOGY (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1956",
        "category": "eng",
        "level": "diploma",
        "school": "BORABU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ELECTRICAL AND ELECTRONICS TECHNOLOGY (TELECOMMUNICATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1957",
        "category": "media",
        "level": "diploma",
        "school": "KENYA METHODIST UNIVERSITY",
        "name": "DIPLOMA IN JOURNALISM",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1958",
        "category": "med",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN JOURNALISM & MEDIA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1959",
        "category": "med",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN JOURNALISM & MEDIA",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1960",
        "category": "biz",
        "level": "diploma",
        "school": "KIRINYAGA UNIVERSITY",
        "name": "DIPLOMA IN BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1961",
        "category": "biz",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1962",
        "category": "biz",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1963",
        "category": "biz",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN BUSINESS INFORMATION TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1964",
        "category": "tvet",
        "level": "diploma",
        "school": "EKERUBO GIETAI TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1965",
        "category": "tvet",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1966",
        "category": "tvet",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1967",
        "category": "tvet",
        "level": "diploma",
        "school": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1968",
        "category": "tvet",
        "level": "diploma",
        "school": "LAIKIPIA NORTH TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1969",
        "category": "tvet",
        "level": "diploma",
        "school": "KIENI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1970",
        "category": "tvet",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN HUMAN RESOURCE MANAGEMENT (EVENING CLASSES)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1971",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN RISK MANAGEMENT AND INSURANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1972",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1973",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN LEADERSHIP AND MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1974",
        "category": "tvet",
        "level": "diploma",
        "school": "OL'LESSOS TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1975",
        "category": "tvet",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN MICRO-FINANCE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1976",
        "category": "agri",
        "level": "diploma",
        "school": "CO-OPERATIVE UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN AGRIBUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1977",
        "category": "agri",
        "level": "diploma",
        "school": "SCOTT CHRISTIAN UNIVERSITY",
        "name": "DIPLOMA IN AGRIBUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1978",
        "category": "agri",
        "level": "diploma",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "DIPLOMA IN AGRIBUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1979",
        "category": "agri",
        "level": "diploma",
        "school": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN ENTERPRENEURAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1980",
        "category": "agri",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN ENTERPRENEURAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1981",
        "category": "agri",
        "level": "diploma",
        "school": "BUKURA AGRICULTURAL COLLEGE",
        "name": "DIPLOMA IN AGRIBUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1982",
        "category": "biz",
        "level": "diploma",
        "school": "SIALA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN  MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1983",
        "category": "agri",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRIBUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1984",
        "category": "biz",
        "level": "diploma",
        "school": "MATHIOYA TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN  MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1985",
        "category": "biz",
        "level": "diploma",
        "school": "NUU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN  MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1986",
        "category": "agri",
        "level": "diploma",
        "school": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRIBUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1987",
        "category": "biz",
        "level": "diploma",
        "school": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN  MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1988",
        "category": "agri",
        "level": "diploma",
        "school": "KAJIADO WEST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ENTERPRENEURAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1989",
        "category": "biz",
        "level": "diploma",
        "school": "LAIKIPIA EAST TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN  MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1990",
        "category": "biz",
        "level": "diploma",
        "school": "MANDERA TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN SUPPLY CHAIN  MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1991",
        "category": "agri",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ENTERPRENEURAL AGRICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1992",
        "category": "agri",
        "level": "diploma",
        "school": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN AGRIBUSINESS MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1993",
        "category": "biz",
        "level": "diploma",
        "school": "ELDAMA RAVINE TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN  MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1994",
        "category": "biz",
        "level": "diploma",
        "school": "KIMININI TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN  MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1995",
        "category": "biz",
        "level": "diploma",
        "school": "KIPSOEN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN SUPPLY CHAIN  MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1996",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN MUSIC AND DANCE",
        "cutoff": 0,
        "requirements": {
            "muc": 4
        }
    },
    {
        "id": "dip_1997",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN MUSIC AND DANCE",
        "cutoff": 0,
        "requirements": {
            "muc": 4
        }
    },
    {
        "id": "dip_1998",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN CRIMINOLOGY AND CRIMINAL JUSTICE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_1999",
        "category": "tvet",
        "level": "diploma",
        "school": "KARATINA UNIVERSITY",
        "name": "DIPLOMA IN CRIMINOLOGY AND CRIMINAL JUSTICE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2000",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN SECURITY AND INTELLIGENCE STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2001",
        "category": "tvet",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN DISASTER MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2002",
        "category": "edu",
        "level": "diploma",
        "school": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "name": "DIPLOMA IN EARLY CHILDHOOD EDUCATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2003",
        "category": "edu",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN EARLY CHILDHOOD EDUCATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2004",
        "category": "edu",
        "level": "diploma",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "DIPLOMA IN EARLY CHILDHOOD EDUCATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2005",
        "category": "edu",
        "level": "diploma",
        "school": "KINANGO TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN EARLY CHILDHOOD EDUCATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2006",
        "category": "tvet",
        "level": "diploma",
        "school": "PROG CODE",
        "name": "INSTITUTION NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2007",
        "category": "sci",
        "level": "diploma",
        "school": "1082715",
        "name": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2008",
        "category": "tvet",
        "level": "diploma",
        "school": "1112715",
        "name": "TECHNICAL UNIVERSITY OF KENYA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2009",
        "category": "tvet",
        "level": "diploma",
        "school": "1166715",
        "name": "SOUTH EASTERN KENYA UNIVERSITY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2010",
        "category": "tvet",
        "level": "diploma",
        "school": "1307715",
        "name": "MATILI TECHNICAL TRAINING INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2011",
        "category": "tvet",
        "level": "diploma",
        "school": "1405715",
        "name": "MUSAKASA TECHNICAL TRAINING INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2012",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN HORTICULTURE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2013",
        "category": "sci",
        "level": "diploma",
        "school": "1082812",
        "name": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2014",
        "category": "tvet",
        "level": "diploma",
        "school": "1244812",
        "name": "KARATINA UNIVERSITY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2015",
        "category": "agri",
        "level": "diploma",
        "school": "1605812",
        "name": "BUKURA AGRICULTURAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2016",
        "category": "tvet",
        "level": "diploma",
        "school": "3936812",
        "name": "KIPTARAGON TECHNICAL AND VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2017",
        "category": "med",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN MEDICAL BIO-TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2018",
        "category": "sci",
        "level": "diploma",
        "school": "1082813",
        "name": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2019",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN HEALTH PROMOTION AND EDUCATION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2020",
        "category": "sci",
        "level": "diploma",
        "school": "1082814",
        "name": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2021",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN SPORTS ADMINISTRATION AND MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2022",
        "category": "sci",
        "level": "diploma",
        "school": "1082815",
        "name": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2023",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN WATER RESOURCES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2024",
        "category": "sci",
        "level": "diploma",
        "school": "1082816",
        "name": "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2025",
        "category": "tvet",
        "level": "diploma",
        "school": "1570816",
        "name": "TURKANA UNIVERSITY COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2026",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN SUPPLIES MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2027",
        "category": "tvet",
        "level": "diploma",
        "school": "1084747",
        "name": "SIGALAGALA NATIONAL POLYTECHNIC",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2028",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN ENVIRONMENTAL MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2029",
        "category": "tvet",
        "level": "diploma",
        "school": "1092712",
        "name": "KENYA WILDLIFE SERVICE TRAINING INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2030",
        "category": "tvet",
        "level": "diploma",
        "school": "1112712",
        "name": "TECHNICAL UNIVERSITY OF KENYA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2031",
        "category": "tvet",
        "level": "diploma",
        "school": "1239712",
        "name": "NYERI NATIONAL POLYTECHNIC",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2032",
        "category": "sci",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN FISHERIES AND AQUATIC SCIENCES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2033",
        "category": "tvet",
        "level": "diploma",
        "school": "1092837",
        "name": "KENYA WILDLIFE SERVICE TRAINING INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2034",
        "category": "tvet",
        "level": "diploma",
        "school": "1244837",
        "name": "KARATINA UNIVERSITY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2035",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN WILDLIFE MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2036",
        "category": "tvet",
        "level": "diploma",
        "school": "1092843",
        "name": "KENYA WILDLIFE SERVICE TRAINING INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2037",
        "category": "tvet",
        "level": "diploma",
        "school": "1244843",
        "name": "KARATINA UNIVERSITY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2038",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION ( KISWAHILI / CHRISTIAN RELIGIOUS EDUCATION)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2039",
        "category": "tvet",
        "level": "diploma",
        "school": "1108951",
        "name": "KIBABII UNIVERSITY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2040",
        "category": "edu",
        "level": "diploma",
        "school": "1399951",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2041",
        "category": "edu",
        "level": "diploma",
        "school": "1400951",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2042",
        "category": "edu",
        "level": "diploma",
        "school": "1410951",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2043",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN COUNSELLING PSYCHOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2044",
        "category": "tvet",
        "level": "diploma",
        "school": "1112763",
        "name": "TECHNICAL UNIVERSITY OF KENYA",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2045",
        "category": "tvet",
        "level": "diploma",
        "school": "1192763",
        "name": "GREAT LAKES UNIVERSITY OF KISUMU",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2046",
        "category": "tvet",
        "level": "diploma",
        "school": "INSTITUTION NAME",
        "name": "PROGRAMME NAME",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2047",
        "category": "tvet",
        "level": "diploma",
        "school": "NYANDARUA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "name": "DIPLOMA IN COUNSELLING PSYCHOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2048",
        "category": "tvet",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN COUNSELLING PSYCHOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2049",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN APPLIED CHEMISTRY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2050",
        "category": "tvet",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN APPLIED CHEMISTRY",
        "cutoff": 0,
        "requirements": {
            "chem": 4
        }
    },
    {
        "id": "dip_2051",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (MUSIC/ENGLISH )",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2052",
        "category": "edu",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN TEACHER EDUCATION (MUSIC/ENGLISH )",
        "cutoff": 0,
        "requirements": {
            "eng": 6
        }
    },
    {
        "id": "dip_2053",
        "category": "edu",
        "level": "diploma",
        "school": "KAGUMO TEACHERS TRAINING COLLEGE",
        "name": "DIPLOMA IN TEACHER EDUCATION (MUSIC/ENGLISH )",
        "cutoff": 0,
        "requirements": {
            "eng": 6
        }
    },
    {
        "id": "dip_2054",
        "category": "eng",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TECHNOLOGY (AERONAUTICAL ENGINEERING)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2055",
        "category": "eng",
        "level": "diploma",
        "school": "TECHNICAL UNIVERSITY OF KENYA",
        "name": "DIPLOMA IN TECHNOLOGY (AERONAUTICAL ENGINEERING)",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_2056",
        "category": "eng",
        "level": "diploma",
        "school": "EAST AFRICAN SCHOOL OF AVIATION",
        "name": "DIPLOMA IN AERONAUTICAL ENGINEERING (AIRFRAMES AND ENGINES)",
        "cutoff": 0,
        "requirements": {
            "eng": 5
        }
    },
    {
        "id": "dip_2057",
        "category": "med",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN COMMUNITY HEALTH AND NUTRITION",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2058",
        "category": "med",
        "level": "diploma",
        "school": "KENYA COAST POLYTECHNIC",
        "name": "DIPLOMA IN COMMUNITY HEALTH AND NUTRITION",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_2059",
        "category": "med",
        "level": "diploma",
        "school": "CATHOLIC UNIVERSITY OF EAST AFRICA",
        "name": "DIPLOMA IN COMMUNITY HEALTH AND DEVELOPMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_2060",
        "category": "med",
        "level": "diploma",
        "school": "TURKANA UNIVERSITY COLLEGE",
        "name": "DIPLOMA IN COMMUNITY HEALTH AND DEVELOPMENT",
        "cutoff": 0,
        "requirements": {
            "bio": 4
        }
    },
    {
        "id": "dip_2061",
        "category": "med",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN ANIMAL PRODUCTION AND HEALTH MANAGEMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2062",
        "category": "med",
        "level": "diploma",
        "school": "SOUTH EASTERN KENYA UNIVERSITY",
        "name": "DIPLOMA IN ANIMAL PRODUCTION AND HEALTH MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 3
        }
    },
    {
        "id": "dip_2063",
        "category": "med",
        "level": "diploma",
        "school": "LAISAMIS TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN ANIMAL PRODUCTION AND HEALTH MANAGEMENT",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 3
        }
    },
    {
        "id": "dip_2064",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (ENGLISH / CRE)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2065",
        "category": "edu",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN TEACHER EDUCATION (ENGLISH / CRE)",
        "cutoff": 0,
        "requirements": {
            "eng": 6
        }
    },
    {
        "id": "dip_2066",
        "category": "edu",
        "level": "diploma",
        "school": "KAGUMO TEACHERS TRAINING COLLEGE",
        "name": "DIPLOMA IN TEACHER EDUCATION (ENGLISH / CRE)",
        "cutoff": 0,
        "requirements": {
            "eng": 6
        }
    },
    {
        "id": "dip_2067",
        "category": "edu",
        "level": "diploma",
        "school": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "name": "DIPLOMA IN TEACHER EDUCATION (ENGLISH AND CHRISTIAN RELIGIOUS EDUCATION)",
        "cutoff": 0,
        "requirements": {
            "eng": 6
        }
    },
    {
        "id": "dip_2068",
        "category": "edu",
        "level": "diploma",
        "school": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "name": "DIPLOMA IN TEACHER EDUCATION (ENGLISH / CRE)",
        "cutoff": 0,
        "requirements": {
            "eng": 6
        }
    },
    {
        "id": "dip_2069",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (PHYSICS/MATHEMATICS)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2070",
        "category": "edu",
        "level": "diploma",
        "school": "MACHAKOS UNIVERSITY",
        "name": "DIPLOMA IN TEACHER EDUCATION (PHYSICS/MATHEMATICS)",
        "cutoff": 0,
        "requirements": {
            "eng": 6
        }
    },
    {
        "id": "dip_2071",
        "category": "edu",
        "level": "diploma",
        "school": "KAGUMO TEACHERS TRAINING COLLEGE",
        "name": "DIPLOMA IN TEACHER EDUCATION (PHYSICS/MATHEMATICS)",
        "cutoff": 0,
        "requirements": {
            "eng": 6
        }
    },
    {
        "id": "dip_2072",
        "category": "med",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN CLINICAL MEDICINE",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2073",
        "category": "med",
        "level": "diploma",
        "school": "GREAT LAKES UNIVERSITY OF KISUMU",
        "name": "DIPLOMA IN CLINICAL MEDICINE",
        "cutoff": 0,
        "requirements": {
            "eng_kis": 6
        }
    },
    {
        "id": "dip_2074",
        "category": "it",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2075",
        "category": "it",
        "level": "diploma",
        "school": "NORTH EASTERN PROVINCE NATIONAL POLYTECHNIC",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2076",
        "category": "it",
        "level": "diploma",
        "school": "SIAYA INSTITUTE OF TECHNOLOGY",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2077",
        "category": "it",
        "level": "diploma",
        "school": "MITUNGUU TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2078",
        "category": "it",
        "level": "diploma",
        "school": "MOIBEN TECHNICAL VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2079",
        "category": "it",
        "level": "diploma",
        "school": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2080",
        "category": "it",
        "level": "diploma",
        "school": "GITWEBE TECHNICAL TRAINING INSTITUTE",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2081",
        "category": "it",
        "level": "diploma",
        "school": "RUNYENJES TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2082",
        "category": "it",
        "level": "diploma",
        "school": "SABATIA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2083",
        "category": "it",
        "level": "diploma",
        "school": "THARAKA TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2084",
        "category": "it",
        "level": "diploma",
        "school": "KIPSOEN TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2085",
        "category": "it",
        "level": "diploma",
        "school": "SAMBURU TECHNICAL AND VOCATIONAL COLLEGE",
        "name": "DIPLOMA IN COMPUTERIZED SECRETARIAL STUDIES",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2086",
        "category": "soc",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN SOFTWARE DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2087",
        "category": "soc",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN SOFTWARE DEVELOPMENT",
        "cutoff": 0,
        "requirements": {
            "eng": 4
        }
    },
    {
        "id": "dip_2088",
        "category": "media",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN ART AND DESIGN",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2089",
        "category": "media",
        "level": "diploma",
        "school": "ELDORET POLYTECHNIC",
        "name": "DIPLOMA IN ART AND DESIGN",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2090",
        "category": "tvet",
        "level": "diploma",
        "school": "PROG CODE",
        "name": "INSTITUTION NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2091",
        "category": "sci",
        "level": "diploma",
        "school": "1240992",
        "name": "MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2092",
        "category": "agri",
        "level": "diploma",
        "school": "1605992",
        "name": "BUKURA AGRICULTURAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2093",
        "category": "edu",
        "level": "diploma",
        "school": "1399262",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2094",
        "category": "edu",
        "level": "diploma",
        "school": "1399263",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2095",
        "category": "edu",
        "level": "diploma",
        "school": "1399264",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2096",
        "category": "edu",
        "level": "diploma",
        "school": "1399265",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2097",
        "category": "edu",
        "level": "diploma",
        "school": "1400265",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2098",
        "category": "edu",
        "level": "diploma",
        "school": "1410265",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2099",
        "category": "edu",
        "level": "diploma",
        "school": "1399266",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2100",
        "category": "edu",
        "level": "diploma",
        "school": "1399269",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2101",
        "category": "edu",
        "level": "diploma",
        "school": "1399903",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2102",
        "category": "edu",
        "level": "diploma",
        "school": "1400903",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2103",
        "category": "edu",
        "level": "diploma",
        "school": "1410903",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2104",
        "category": "edu",
        "level": "diploma",
        "school": "1399905",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2105",
        "category": "edu",
        "level": "diploma",
        "school": "1400905",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2106",
        "category": "edu",
        "level": "diploma",
        "school": "1410905",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2107",
        "category": "edu",
        "level": "diploma",
        "school": "1399906",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2108",
        "category": "edu",
        "level": "diploma",
        "school": "1400906",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2109",
        "category": "edu",
        "level": "diploma",
        "school": "1410906",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2110",
        "category": "edu",
        "level": "diploma",
        "school": "1399909",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2111",
        "category": "edu",
        "level": "diploma",
        "school": "1400909",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2112",
        "category": "edu",
        "level": "diploma",
        "school": "1410909",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2113",
        "category": "edu",
        "level": "diploma",
        "school": "1399910",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2114",
        "category": "edu",
        "level": "diploma",
        "school": "1400910",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2115",
        "category": "edu",
        "level": "diploma",
        "school": "1410910",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2116",
        "category": "edu",
        "level": "diploma",
        "school": "1399911",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2117",
        "category": "tvet",
        "level": "diploma",
        "school": "PROG CODE",
        "name": "INSTITUTION NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2118",
        "category": "edu",
        "level": "diploma",
        "school": "1400911",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2119",
        "category": "edu",
        "level": "diploma",
        "school": "1410911",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2120",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (GEOGRAPHY/BUSINESS STUDIES)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2121",
        "category": "edu",
        "level": "diploma",
        "school": "1399912",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2122",
        "category": "edu",
        "level": "diploma",
        "school": "1400912",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2123",
        "category": "edu",
        "level": "diploma",
        "school": "1410912",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2124",
        "category": "tvet",
        "level": "diploma",
        "school": "2560912",
        "name": "MASINGA TECHNICAL AND VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2125",
        "category": "tvet",
        "level": "diploma",
        "school": "3720912",
        "name": "DAVID N WAMBULI TECHNICAL VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2126",
        "category": "tvet",
        "level": "diploma",
        "school": "3830912",
        "name": "UGENYA TECHNICAL AND VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2127",
        "category": "tvet",
        "level": "diploma",
        "school": "3950912",
        "name": "NYAKACH TECHNICAL AND VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2128",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (AGRICULTURE/BIOLOGY)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2129",
        "category": "edu",
        "level": "diploma",
        "school": "1399945",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2130",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (MATHS / GEOGRAPHY)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2131",
        "category": "edu",
        "level": "diploma",
        "school": "1399955",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2132",
        "category": "edu",
        "level": "diploma",
        "school": "1400955",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2133",
        "category": "edu",
        "level": "diploma",
        "school": "1410955",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2134",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (GERMAN/ ENGLISH)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2135",
        "category": "edu",
        "level": "diploma",
        "school": "1399958",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2136",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (MUSIC/KISWAHILI)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2137",
        "category": "edu",
        "level": "diploma",
        "school": "1399963",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2138",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (ART AND DESIGN / ENGLISH )",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2139",
        "category": "edu",
        "level": "diploma",
        "school": "1399964",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2140",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (ART AND DESIGN / KISWAHILI)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2141",
        "category": "edu",
        "level": "diploma",
        "school": "1399965",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2142",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (FRENCH/ENGLISH)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2143",
        "category": "edu",
        "level": "diploma",
        "school": "1399967",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2144",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (IRE WITH ARABIC)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2145",
        "category": "edu",
        "level": "diploma",
        "school": "1399971",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2146",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (IRE WITH ENGLISH)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2147",
        "category": "edu",
        "level": "diploma",
        "school": "1399972",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2148",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (PHYSICS / COMPUTER STUDIES)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2149",
        "category": "edu",
        "level": "diploma",
        "school": "1399983",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2150",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (AGRICULTURE / CHEMISTRY)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2151",
        "category": "edu",
        "level": "diploma",
        "school": "1399984",
        "name": "KAGUMO TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2152",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (FRENCH WITH EITHER HISTORY, GEOGRAPHY, CRE, IRE OR ENGLISH)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2153",
        "category": "edu",
        "level": "diploma",
        "school": "1400904",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2154",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (ISLAMIC RELIGIOUS EDUCATION WITH EITHER ARABIC/KISWAHILI/GEOGRAPHY/ENGLISH/HISTORY )",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2155",
        "category": "edu",
        "level": "diploma",
        "school": "1400907",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2156",
        "category": "edu",
        "level": "diploma",
        "school": "",
        "name": "DIPLOMA IN TEACHER EDUCATION (ENGLISH AND GEOGRAPHY)",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2157",
        "category": "edu",
        "level": "diploma",
        "school": "1400952",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2158",
        "category": "tvet",
        "level": "diploma",
        "school": "PROG CODE",
        "name": "INSTITUTION NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2159",
        "category": "edu",
        "level": "diploma",
        "school": "1410952",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2160",
        "category": "edu",
        "level": "diploma",
        "school": "1400953",
        "name": "KIBABII DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2161",
        "category": "edu",
        "level": "diploma",
        "school": "1410953",
        "name": "LUGARI DIPLOMA TEACHERS TRAINING COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2162",
        "category": "tvet",
        "level": "diploma",
        "school": "1420993",
        "name": "KENYA WATER INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2163",
        "category": "agri",
        "level": "diploma",
        "school": "1605993",
        "name": "BUKURA AGRICULTURAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2164",
        "category": "tvet",
        "level": "diploma",
        "school": "1420998",
        "name": "KENYA WATER INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2165",
        "category": "tvet",
        "level": "diploma",
        "school": "3710998",
        "name": "BUTERE TECHNICAL AND VOCATIONAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2166",
        "category": "arch",
        "level": "diploma",
        "school": "1445748",
        "name": "KENYA INSTITUTE OF HIGHWAYS AND BUILDING",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2167",
        "category": "tvet",
        "level": "diploma",
        "school": "",
        "name": "TECHNOLOGY",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2168",
        "category": "trans",
        "level": "diploma",
        "school": "1535968",
        "name": "EAST AFRICAN SCHOOL OF AVIATION",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2169",
        "category": "trans",
        "level": "diploma",
        "school": "1535973",
        "name": "EAST AFRICAN SCHOOL OF AVIATION",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2170",
        "category": "trans",
        "level": "diploma",
        "school": "1535974",
        "name": "EAST AFRICAN SCHOOL OF AVIATION",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2171",
        "category": "trans",
        "level": "diploma",
        "school": "1535985",
        "name": "EAST AFRICAN SCHOOL OF AVIATION",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2172",
        "category": "tvet",
        "level": "diploma",
        "school": "1540898",
        "name": "KENYA INSTITUTE OF SURVEYING AND MAPPING",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2173",
        "category": "tvet",
        "level": "diploma",
        "school": "1550898",
        "name": "REGIONAL CENTRE FOR MAPPING OF RESOURCES FOR",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2174",
        "category": "soc",
        "level": "diploma",
        "school": "",
        "name": "DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2175",
        "category": "tvet",
        "level": "diploma",
        "school": "1540899",
        "name": "KENYA INSTITUTE OF SURVEYING AND MAPPING",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2176",
        "category": "tvet",
        "level": "diploma",
        "school": "1550899",
        "name": "REGIONAL CENTRE FOR MAPPING OF RESOURCES FOR",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2177",
        "category": "soc",
        "level": "diploma",
        "school": "",
        "name": "DEVELOPMENT",
        "cutoff": 0,
        "requirements": null
    },
    {
        "id": "dip_2178",
        "category": "tvet",
        "level": "diploma",
        "school": "1540900",
        "name": "KENYA INSTITUTE OF SURVEYING AND MAPPING",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2179",
        "category": "tvet",
        "level": "diploma",
        "school": "1560835",
        "name": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2180",
        "category": "tvet",
        "level": "diploma",
        "school": "1560866",
        "name": "MAWEGO TECHNICAL TRAINING INSTITUTE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2181",
        "category": "agri",
        "level": "diploma",
        "school": "1605994",
        "name": "BUKURA AGRICULTURAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2182",
        "category": "agri",
        "level": "diploma",
        "school": "1605996",
        "name": "BUKURA AGRICULTURAL COLLEGE",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2183",
        "category": "tvet",
        "level": "diploma",
        "school": "1695989",
        "name": "KENYA SCHOOL OF REVENUE ADMINISTRATION",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2184",
        "category": "tvet",
        "level": "diploma",
        "school": "PROG CODE",
        "name": "INSTITUTION NAME",
        "cutoff": 0,
        "requirements": {}
    },
    {
        "id": "dip_2185",
        "category": "tvet",
        "level": "diploma",
        "school": "1695990",
        "name": "KENYA SCHOOL OF REVENUE ADMINISTRATION",
        "cutoff": 0,
        "requirements": {}
    }
];
module.exports = courses;