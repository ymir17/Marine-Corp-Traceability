We have to run some queries for our website

# First Call #

First we either have to run :
```
traceability(id:someid)
{
    fishingtripId
}
```

If the id is not present in the database this will return :
```
{
    "data": {
        "traceability": null
    }
}

```

However if we a have valid id it will return this: 
```
{
    "data": {
        "traceability": {
            "fishingtripId": 2
        }
    }
}

```

If it returns null we will have to do some error handling or display 404 or something. However if it returns the fishingtripId we will call the next Query

# Second Call #
- This is a big one, we must make the second query with valid the **fishingtripId**
```
query{
    fishingtrip(id:2) 
    {
      id
      endDate
      startDate
      boat 
      {
        name
        imguri
        freeze_trawler
        fishingequipmentId    
      }

      treatedby 
      {
        homepage
        name
        description
        imguri
        logouri
      }

      fish {
        name
        description
        imguri
      }

      location {
        name
      }
      harbour 
      {
        latitude
        longitude
        name
      }
  }  
}
  

```


- Making that call we recieve the following response:

```
{
    "data": {
        "fishingtrip": {
            "id": "2",
            "endDate": "2021-6-3",
            "startDate": "2021-5-3",
            "boat": {
                "name": "Anna EA-305",
                "imguri": "https://static.mbl.is/generic/sax/skipamyndir/5897.jpg",
                "freeze_trawler": true,
                "fishingequipmentId": 2
            },
            "treatedby": {
                "homepage": "https://www.lavaseafood.is",
                "name": "Lava Seafood",
                "description": "The aim of Lava Seafood is to deliver Icelandic quality seafood to various markets in a safe and efficient manner.",
                "imguri": "https://ja.is/og_360/1736087/",
                "logouri": "https://images.squarespace-cdn.com/content/v1/5cbf2cf47eb88c15cd33fa0f/1556555328725-IL18MFSIU6KYX4DQ08A3/LAVALOGOBLUE.png?format=1500w"
            },
            "fish": {
                "name": "Cod",
                "description": "cod, (genus Gadus), large and economically important marine fish of the family Gadidae. The species Gadus morhua is found on both sides of the North Atlantic. A cold-water fish, it generally remains near the bottom, ranging from inshore regions to deep waters. It is valued for its edible flesh, the oil of its liver, and other products. ",
                "imguri": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Gadus_morhua_Cod-2b-Atlanterhavsparken-Norway.JPG"
            },
            "location": {
                "name": "Outside of jurisdiction"
            },
            "harbour": {
                "latitude": 65.1499994,
                "longitude": -13.6999972,
                "name": "Neskaupsstaður"
            }
        }
    }
}
```

# THIRD CALL #
The final call we have to make is to fishingequipments with the fishingequipmentId
```
query{
    fishingequipment(id:2)
    {
        name
    }
}
```

Which will give the following response: 
```
{
    "data": {
        "fishingequipment": {
            "name": "Net"
        }
    }
}
```

{
    "fishingtrip": {
        "__typename": "Fishingtrip",
        "id": "1",
        "endDate": "2021-3-3",
        "startDate": "2021-1-3",
        "boat": {
            "__typename": "Boat",
            "name": "Maron GK-22",
            "imguri": "https://static.mbl.is/generic/sax/skipamyndir/6118.jpg",
            "freeze_trawler": false,
            "fishingequipmentId": 1
        },
        "treatedby": {
            "__typename": "Treatedby",
            "homepage": "https://www.brim.is/",
            "name": "Brim",
            "description": "Brim hf. is one of Iceland’s largest seafood companies. The company has a long history and extensive experience and expertise in the utilisation of natural resources and fish production, which is reflected in all its activities. The company focuses on sophisticated fishing and processing technology and continuous production development. The company produces high-quality products from the fresh wild fish caught in Icelandic waters. Respect for the environment and the marine ecosystem is the basis for all activities at Brim, and every effort is made to respect the resource and operate responsible fisheries, for the benefit of future generations. Brim emphasises corporate social responsibility, as it has always been the goal of the company that all its activities reflect its responsibility towards the marine resources and the community.",
            "imguri": "https://www.brim.is/library/Frettamyndir-(Eirikur)/Brim_hus/210612-092154-Edit.jpg",
            "logouri": "https://www.brim.is/library/Template/images/BRIM_transp_LIT74.png"
        },
        "fish": {
            "__typename": "Fish",
            "name": "bigfish3",
            "description": "sad fish eats alot",
            "imguri": "www.bigfish.com"
        },
        "location": {
            "__typename": "Location",
            "name": "Inside of jurisdiction"
        },
        "harbour": {
            "__typename": "Harbour",
            "latitude": 64.128288,
            "longitude": -21.827774,
            "name": "Reykjavík"
        }
    }
}