new gridjs.Grid({
    search: false,
    sort: true,
    pagination: true,
    fixedHeader: true,
    height: "90%",
  
  
      
      
    columns: [
      { name: "id", width: "200px" },
      { name: "Beer", width: "200px"},
      { name: "ABV", width: "200px" },
      { name: "Style", width: "200px" },
      { name: "Brewery", width: "200px" } ],
  
      server: {
        url: "https://beersapc.onrender.com/api_productname/v1/beers",
        then: (data) => {
          data.sort((a, b) => b.order_id - a.order_id);
          return data.map((beer) => [
            beer.id, 
            beer.beer,
            beer.abv,
            beer.style,
            beer.brewery
            ]);
        }
      },
    
    }).render(document.getElementById("table"));