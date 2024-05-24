$(document).ready(function() {

    // FUNCIONAMIENTO GENERAL

        // Función para mostrar el artículo correspondiente al fragmento de URL
        function showArticleFromHash() {
            var hash = window.location.hash;
            if (hash) {
                $('.panel').hide(); // Oculta todos los artículos
                $(hash).show(); // Muestra el artículo correspondiente al fragmento de URL
            } else {
                // Si no hay fragmento en la URL (como en 'index.html'), mostrar el artículo de inicio
                $('#home').show();
            }
        }

        // Mostrar el artículo correspondiente al cargar la página
        showArticleFromHash();

        // Función para actualizar el enlace activo en el navbar
        function actualizarEnlaceActivo() {
            // Obtener el ID del artículo actual del URL
            var articuloID = window.location.hash.substr(1);

            console.log(articuloID); // Testeo de variable

            // Quitar la clase 'active' de todos los enlaces de navegación
            $('.navbar-nav .nav-item').removeClass('active');

            // Si el ID del artículo está vacío o es 'home'
            if (!articuloID || articuloID === 'home') {
                // Agregar la clase 'active' al enlace de navegación correspondiente a la página de inicio -- parent() hace que se dirija a nav-item
                $('.navbar-nav .nav-link[href="#home"]').parent().addClass('active');
            } else {
                // Agregar la clase 'active' al enlace de navegación correspondiente al artículo actual
                $('.navbar-nav .nav-link[href="#' + articuloID + '"]').parent().addClass('active');
            }
        }

        // Llamar a la función de actualización del enlace activo cuando la página se carga por primera vez
        actualizarEnlaceActivo();

        // Manejo del cambio de fragmento de URL
        $(window).on('hashchange', function() {
            showArticleFromHash();
            actualizarEnlaceActivo();
        });
        
    // FIN FUNCIONAMIENTO GENERAL

    // MENU

      // Ocultar el contenedor de cocktails al cargar la página
      $("#menudrinks").hide();

      // Manejar el click en el botón Meals
      $("#btnMeal").click(function() {
          $("#menudrinks").hide();
          $("#menumeals").show();
      });

      // Manejar el click en el botón Cocktails
      $("#btnDrink").click(function() {
          $("#menumeals").hide();
          $("#menudrinks").show();
      });


      // APIs Comidas
      
        // Breakfast
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#breakfast").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>                              
                        <p>$${Math.round((parseInt(item.idMeal)/6)/10) * 10}</p> 
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Starters
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#starter").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/7)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Beef
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#beef").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/5)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });
            
        // Chicken
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#chicken").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/5.5)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Lamb
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#lamb").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/4.5)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Pork
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#pork").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/5)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Seafood
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#seafood").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/5.7)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Pasta
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#pasta").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/7)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Miscellaneous
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#miscellaneous").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/7.4)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Veggie
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#veggie").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/5.3)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#veggie").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/4.7)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Sides
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Side", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#sides").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/9.2)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Desserts
        $.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert", function(data) { // Se obtiene la API
            $.each(data.meals, function(i, item) { // Se itera por cada objeto del archivo
                $("#desserts").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strMealThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p>$${Math.round((parseInt(item.idMeal)/8.8)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

      // APIs bebidas

        // Ordinary Drinks
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#ordinaryDrinks").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/5.3)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Cocktail
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#cocktail").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/4.8)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Shakes
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#shake").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/5)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Shots
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#shot").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/6.6)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Beer
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#beer").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/4.5)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Homemade Liqueur
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Homemade_Liqueur", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#homemadeLiqueur").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/2.7)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Party Drinks
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Punch_/_Party_Drink", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#party").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/5.1)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Soft Drinks
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Soft_Drink", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#softDrinks").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/6)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Coffee and Tea
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee_/_Tea", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#coffeeTea").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/5.5)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Cocoa
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#cocoa").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/7)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

        // Others
        $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other_/_Unknown", function(data) { // Se obtiene la API
            $.each(data.drinks, function(i, item) { // Se itera por cada objeto del archivo
                $("#others").append( // Agregamos cards
                `<div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card comida">
                        <img class="card-img-top" src="${item.strDrinkThumb}">
                        <div class="card-body">
                        <h5 class="card-title">${item.strDrink}</h5>
                        <p>$${Math.round((parseInt(item.idDrink)/4.3)/10) * 10}</p>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalConfirmation">Add to Order</button>
                        </div>
                    </div>
                </div>` 
                );
            });
        });

    // FIN MENU
    

    // PEDIDO

        // Variables del 'carro de compras': array con los productos y precio
        var carro = [];
        var total = 0;

        // Función para actualizar contenido del carro, sea cuando se agrega o elimina un producto, o se limpia tras completar el pedido
        function updateCart() {
            $("#cartItems").empty(); // Se el contenido del elemento html que contendrá el detalle del pedido en una tabla
            carro.forEach((item, index) => { // Se agregan los productos en el array 'carro' como un tr de la tabla - nombre, precio, y un botón para eliminar
                $("#cartItems").append(
                    `<tr>
                        <td>${item.name}</td>
                        <td>$${item.price}</td>
                        <td class="remove-td"><button class="remove-item" data-index="${index}">Remove</button></td>
                    </tr>`
                );
            });
            $("#totalPrice").text(`Total: $${total}`);
        };

        // Función que actualiza un componente Badge, el cual indica la cantidad de productos en el actual pedido junto al enlace de "Your Order" en el navbar
        function updateBadge() {
            let itemCount = carro.length; // Cantidad de productos en el pedido
            let badge = $("#orderBadge");
            
            if (itemCount > 0) { // Si hay productos, se muestra el valor
                badge.text(itemCount);
                badge.show();
            } else { // Si el pedido está vacío, el Badge no aparece
                badge.hide();
            }
        };

        // Función que se invoca cuando se hace click en los botones de los cards para agregar producto al pedido
        $(document).on('click', '.btn-dark', function() {
            let item = $(this).closest('.card');
            let itemName = item.find('.card-title').text();
            let itemPrice = parseInt(item.find('p').text().substring(1));

            console.log(itemName); // Testeo de variables
            console.log(itemPrice); // Testeo de variables

            // Actualizar el nombre del producto en el modal
            $('#productName').text(itemName);

            // Mostrar el mensaje de confirmación con el nombre del producto
            $('#confirmationMessage').text(`Are you sure you want to add ${itemName} to your order?`);

            // Guardar los datos del producto en el botón de confirmación
            $('#confirmAddToCartBtn').data('itemName', itemName);
            $('#confirmAddToCartBtn').data('itemPrice', itemPrice);
        });

        // Función que se invoca cuando el usuario confirma que quiere agregar producto al pedido, mediante un botón en un modal
        $(document).on('click', '#confirmAddToCartBtn', function() {

            // Se capturan los datos del producto (nombre, precio)
            let itemName = $(this).data('itemName');
            let itemPrice = parseFloat($(this).data('itemPrice'));

            carro.push({ name: itemName, price: itemPrice }); // Datos capturados se agregan al array del carro, en pares 'key: value'
            total += itemPrice; // Sumar el precio

            updateCart(); // Actualizar tabla del pedido
            updateBadge(); // Actualizar Badge que indica cantidad de productos en el pedido

            $('#modalConfirmation').modal('hide');

            // Actualizar el nombre del producto en el modal
            $('#productName2').html(`<strong>${itemName}</strong>`);

            // Mostrar el modal de confirmación
            $('#modalConfirmed').modal('show');
        });

        // Función para eliminar un producto del pedido cuando el usuario hace click en el botón correspondiente
        $(document).on('click', '.remove-item', function() {
            let itemIndex = $(this).data('index');
            total -= carro[itemIndex].price;
            carro.splice(itemIndex, 1);

            updateCart();
            updateBadge()
        });

        // Validación Formulario 'Customer Information'

            // Variables con el formato que deben cumplir los campos de dirección y fecha de expiración
            var formatoDireccion = /^[a-zA-Z0-9\s]+ #[0-9]{4}$/; // Debe terminar con " #XXXX"
            var formatoExp = /^(0[1-9]|1[0-2])\/[0-9]{4}$/; // MM/YYYY

            // Validaciones en tiempo real, previas al envío, con avisos al usuario de que no está completando el formulario correctamente

                // Dirección de despacho
                    // focusout para que, en caso de que la dirección tenga un formato invalido, se le de aviso al usuario apenas pase a otros campos
                    $("#inputDireccion").focusout(function() {
                        let direccion = $(this).val();
                        if (direccion.trim() !== '' && !formatoDireccion.test(direccion)) {
                            $("#inputDireccion").addClass("is-invalid");
                            $("#direccionError").text("Please, enter a valid address").show();
                        } else {
                            $("#inputDireccion").removeClass("is-invalid");
                            $("#direccionError").hide();
                        }
                    });

                    // focus para que, en caso de haberse marcado en rojo previamente, el campo vuelva a su estado original apenas se haga click sobre él
                    $("#inputDireccion").focus(function() {
                        $("#inputDireccion").removeClass("is-invalid");
                        $("#direccionError").hide();
                    });

                // Nombre de cliente
                    // focusout para que, en caso de que el nombre esté vacío, se le de aviso al usuario apenas pase a otros campos
                    $("#inputCustName").focusout(function() {
                        var customerName = $(this).val();
                        if (customerName.trim() === '') {
                            $("#inputCustName").addClass("is-invalid");
                            $("#customerError").text("Customer name is required").show();
                        } else {
                            $("#inputCustName").removeClass("is-invalid");
                            $("#customerError").hide();
                        }
                    });

                    // focus para que, en caso de haberse marcado en rojo previamente, el campo vuelva a su estado original apenas se haga click sobre él
                    $("#inputCustName").focus(function() {
                        $("#inputCustName").removeClass("is-invalid");
                        $("#customerError").hide();
                    });

                // Teléfono
                    // Mediante el manejo del input se le impide al usuario ingresar caracteres no númericos o más de 9 dígitos
                    $("#inputCustPhone").on('input', function() {
                        let maxLength = 9; // Define la longitud máxima permitida
                        this.value = this.value.replace(/\D/g, ''); // Elimina cualquier caracter no numérico
                        if (this.value.length > maxLength) {
                            this.value = this.value.slice(0, maxLength); // Limita la longitud del valor al máximo permitido
                        }
                    });

                    // focusout para verificar que, de ingresarse un valor, este sea de 9 digitos y que empiece con 9 - si no se cumple, se da aviso apenas pasa a otro campo
                    $("#inputCustPhone").focusout(function() {
                        let telefono = $(this).val();
                        if (telefono.trim() !== '' && telefono < 900000000) {
                            $("#inputCustPhone").addClass("is-invalid");
                            $("#custPhoneError").text("Please, enter a valid phone number").show();
                        } else {
                            $("#inputCustPhone").removeClass("is-invalid");
                            $("#custPhoneError").hide();
                        }
                    });

                    // focus para que, en caso de haberse marcado en rojo previamente, el campo vuelva a su estado original apenas se haga click sobre él
                    $("#inputCustPhone").focus(function() {
                        $("#inputCustPhone").removeClass("is-invalid");
                        $("#custPhoneError").hide();
                    });

                // Tarjeta
                    // Mediante el manejo del input se le impide al usuario ingresar caracteres no númericos o más de 16 dígitos
                    $("#inputTarjeta").on('input', function() {
                        let maxLength = 16; // Define la longitud máxima permitida
                        this.value = this.value.replace(/\D/g, ''); // Elimina cualquier caracter no numérico
                        if (this.value.length > maxLength) {
                            this.value = this.value.slice(0, maxLength); // Limita la longitud del valor al máximo permitido
                        }
                    });

                    // focusout para verificar que, de ingresarse un valor, este sea de 16 dígitos - si no se cumple, se da aviso apenas pasa a otro campo
                    $("#inputTarjeta").focusout(function() {
                        let tarjeta = $(this).val();
                        if (tarjeta.trim() !== '' && tarjeta.length !== 16) {
                            $("#inputTarjeta").addClass("is-invalid");
                            $("#tarjetaError").text("Please, enter a valid card number").show();
                        } else {
                            $("#inputTarjeta").removeClass("is-invalid");
                            $("#tarjetaError").hide();
                        }
                    });

                    // focus para que, en caso de haberse marcado en rojo previamente, el campo vuelva a su estado original apenas se haga click sobre él
                    $("#inputTarjeta").focus(function() {
                        $("#inputTarjeta").removeClass("is-invalid");
                        $("#tarjetaError").hide();
                    });

                // CVC
                    // Mediante el manejo del input se le impide al usuario ingresar caracteres no númericos o más de 3 dígitos
                    $("#inputCVC").on('input', function() {
                        let maxLength = 3; // Define la longitud máxima permitida
                        this.value = this.value.replace(/\D/g, ''); // Elimina cualquier caracter no numérico
                        if (this.value.length > maxLength) {
                            this.value = this.value.slice(0, maxLength); // Limita la longitud del valor al máximo permitido
                        }
                    });

                    // focusout para verificar que, de ingresarse un valor, este sea de 3 dígitos - si no se cumple, se da aviso apenas pasa a otro campo
                    $("#inputCVC").focusout(function() {
                        let cvc = $(this).val();
                        if (cvc.trim() !== '' && cvc.length !== 3) {
                            $("#inputCVC").addClass("is-invalid");
                            $("#cvcError").text("Please, enter a valid CVC code").show();
                        } else {
                            $("#inputCVC").removeClass("is-invalid");
                            $("#cvcError").hide();
                        }
                    });

                    // focus para que, en caso de haberse marcado en rojo previamente, el campo vuelva a su estado original apenas se haga click sobre él
                    $("#inputCVC").focus(function() {
                        $("#inputCVC").removeClass("is-invalid");
                        $("#cvcError").hide();
                    });

                // Fecha de vencimiento de tarjeta
                    // focusout para que, en caso de que la fecha tenga un formato invalido, o sea anterior a la fecha actual (tarjeta vencida) se le de aviso al usuario apenas pase a otros campos
                    $("#inputExp").focusout(function() {
                        let expDate = $(this).val();
                        if (expDate.trim() !== '' && !formatoExp.test(expDate)) { // Validación de formato
                            $("#inputExp").addClass("is-invalid");
                            $("#expError").text("Please, enter a valid expiration date (MM/YYYY format)").show();
                        } else { // Validación de vigencia de tarjeta
                            let today = new Date();
                            let parts = expDate.split('/');
                            let expMonth = parseInt(parts[0], 10);
                            let expYear = parseInt(parts[1], 10);
                            let expDateObj = new Date(expYear, expMonth - 1); // La fecha de expiración en objeto Date
                            if (expDateObj < today) {
                                $("#inputExp").addClass("is-invalid");
                                $("#expError").text("The card has expired").show();
                            } else {
                                $("#inputExp").removeClass("is-invalid");
                                $("#expError").hide();
                            }
                        }
                    });

                    // focus para que, en caso de haberse marcado en rojo previamente, el campo vuelva a su estado original apenas se haga click sobre él
                    $("#inputExp").focus(function() {
                        $("#inputExp").removeClass("is-invalid");
                        $("#expError").hide();
                    });


            $("#checkoutButton").on('click', function() {

                // Validación final de formulario de información de cliente - en caso que el usuario haya ignorado avisos anteriores o no haya llenado ningún campo

                    // Variables con los valores de los input del usuario
                    let direccion = $("#inputDireccion").val();
                    let customerName = $("#inputCustName").val();
                    let telefono = $("#inputCustPhone").val();
                    let tarjeta = $("#inputTarjeta").val();
                    let cvc = $("#inputCVC").val();
                    let expDate = $("#inputExp").val();

                    // Variable booleana para verificar si el envío del formularo es valido - se inicia en true, y cambia a false en caso de que un campo no cumpla con los requisitos
                    let formularioValido = true;

                    // Validación de dirección
                    if (direccion.trim() === '') { // caso - campo obligatorio vacío
                        $("#inputDireccion").addClass("is-invalid");
                        $("#direccionError").text("Delivery address is required.").show();
                        formularioValido = false;
                    } else if (!formatoDireccion.test(direccion)) { // caso - no se cumplió con el formato de dirección
                        $("#inputDireccion").addClass("is-invalid");
                        $("#direccionError").text("Please enter a valid address.").show();
                        formularioValido = false;
                    }

                    // Validación de nombre del cliente
                    if (customerName.trim() === '') { // caso - campo obligatorio vacío
                        $("#inputCustName").addClass("is-invalid");
                        $("#customerError").text("Customer name is required").show();
                        formularioValido = false;
                    }

                    // Validación de número de teléfono
                    if (telefono.trim() === '') { // caso - campo obligatorio vacío
                        $("#inputCustPhone").addClass("is-invalid");
                        $("#custPhoneError").text("Phone number is required").show();
                        formularioValido = false;
                    } else if (telefono.length !== 9 || telefono < 900000000) { // caso - no se cumplió con formato de número de telefono
                        $("#inputCustPhone").addClass("is-invalid");
                        $("#custPhoneError").text("Please, enter a valid phone number.").show();
                        formularioValido = false;
                    }

                    // Validación de número de tarjeta
                    if (tarjeta.trim() === '') { // caso - campo obligatorio vacío
                        $("#inputTarjeta").addClass("is-invalid");
                        $("#tarjetaError").text("Card number is required.").show();
                        formularioValido = false;
                    } else if (tarjeta.length !== 16) { // caso - no se cumplió con formato de número de tarjeta
                        $("#inputTarjeta").addClass("is-invalid");
                        $("#tarjetaError").text("Please enter a valid card number.").show();
                        formularioValido = false;
                    }

                    // Validación de CVC
                    if (cvc.trim() === '') { // caso - campo obligatorio vacío
                        $("#inputCVC").addClass("is-invalid");
                        $("#cvcError").text("CVC code is required.").show();
                        formularioValido = false;
                    } else if (cvc.length !== 3) { // caso - no se cumplió con formato de cvc
                        $("#inputCVC").addClass("is-invalid");
                        $("#cvcError").text("Please enter a valid CVC code").show();
                        formularioValido = false;
                    }

                    // Validación de fecha de expiración
                    if (expDate.trim() === '') { // caso - campo obligatorio vacío
                        $("#inputExp").addClass("is-invalid");
                        $("#expError").text("Expiration date is required.").show();
                        formularioValido = false;
                    } else if (!formatoExp.test(expDate)) { // caso - no se cumplió con formato de fecha
                        $("#inputExp").addClass("is-invalid");
                        $("#expError").text("Please enter a valid expiration date (MM/YYYY format)").show();
                        formularioValido = false;
                    } else { // Verificar vigencia de tarjeta
                        let today = new Date();
                        let parts = expDate.split('/');
                        let expMonth = parseInt(parts[0], 10);
                        let expYear = parseInt(parts[1], 10);
                        let expDateObj = new Date(expYear, expMonth - 1); // La fecha de expiración en objeto Date
                        if (expDateObj < today) { // caso - la tarjeta está vencida
                            $("#inputExp").addClass("is-invalid");
                            $("#expError").text("The card has expired.").show();
                            formularioValido = false;
                        }
                    }

                // Si el formulario es válido, simular el envío o proceder al siguiente paso
                if (formularioValido && carro.length !== 0) {
                    $("#ordenAlert").html(`
                    <div class="col-md-8 col-sm-12 alert-container">
                        <div class="alert alert-success" role="alert">
                        We're ready, your order is on the way! - Thanks for choosing us, and enjoy your meal!
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-12">  
                        <button class="btn btn-secondary" id="btnCloseAlert">Close</button>                      
                    </div>
                    `);
                
                    $("#ordenAlert").removeClass("hidden");

                    $("#formPago")[0].reset(); // Limpiar el formulario después de la validación exitosa

                    carro = [];
                    total = 0;

                    updateCart();
                    updateBadge();

                } else if (carro.length === 0) {
                    $("#ordenAlert").html(`
                    <div class="col-md-8 col-sm-12 alert-container">
                        <div class="alert alert-danger" role="alert">
                        Your order is empty!
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-12">  
                        <button class="btn btn-secondary" id="btnCloseAlert">Close</button>                      
                    </div>
                    `);

                    $("#ordenAlert").removeClass("hidden");
                }
            });

        // Función para cerrar alert cuando usuario hace click en botón correspondiente
        $(document).on('click', '#btnCloseAlert', function() {
            $("#ordenAlert").addClass("hidden");
        });

    // FIN PEDIDO


    // FORMULARIO DE CONTACTO

        // Variables con el formato que deben cumplir los campos de nombre, apellido y correo electrónico
        var formatoNombres = /^[a-zA-Z\u00C0-\u017F\s']+$/;
        var formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Función que despliega un alert informando que el mensaje en el formulario de contacto se ha enviado (sin validación)
        function mostrarConfirmaciónContacto() {
            window.alert('Message sent. Thank you for contacting us!');

            // Una vez que se envía y se recibe el mensaje, se limpia el formulario
            $("#formContact")[0].reset();
        }

        // Validaciones en tiempo real, previas al envío, con avisos al usuario de que no está completando el formulario correctamente

            // Nombre y Apellido  
                // Mientras el usuario teclea, verifica que no esté ingresando caracteres no permitidos
                // Los campos no deben estar marcados como inválidos mientras esten vacíos o se esté ingresando texto correctamente
                $("#inputNombre").on("input", function() {
                    let nombre = $(this).val();
                    if (nombre.trim() !== '' && !formatoNombres.test(nombre)) {
                    $("#inputNombre").addClass("is-invalid");
                    $("#nombreError").text("Please, enter a valir name").show();
                    } else {
                    $("#inputNombre").removeClass("is-invalid");
                    $("#nombreError").hide();
                    }
                });

                $("#inputApellido").on("input", function() {
                    let apellido = $(this).val();
                    if (apellido.trim() !== '' && !formatoNombres.test(apellido)) {
                    $("#inputApellido").addClass("is-invalid");
                    $("#apellidoError").text("Please, enter a valir name").show();
                    } else {
                    $("#inputApellido").removeClass("is-invalid");
                    $("#apellidoError").hide();
                    }
                });
            
            // Correo Electrónico 
                // focusout para que, en caso de que el correo tenga un formato invalido, se le de aviso al usuario apenas pase a otros campos
                $("#inputEmail").focusout(function() {
                    let correo = $(this).val();
                    if (correo.trim() !== '' && !formatoCorreo.test(correo)) {
                    $("#inputEmail").addClass("is-invalid");
                    $("#emailError").text("Please, enter a valid e-mail address").show();
                    } else {
                    $("#inputEmail").removeClass("is-invalid");
                    $("#emailError").hide();
                    }
                });

                // focus para que, en caso de haberse marcado en rojo previamente, el campo vuelva a su estado original apenas se haga click sobre él
                $("#inputEmail").focus(function() {
                    let correo = $(this).val();
                    
                    $("#inputEmail").removeClass("is-invalid");
                    $("#emailError").hide();
                    
                });

            // Teléfono
                // Mediante el manejo del input se le impide al usuario ingresar caracteres no númericos o más de 9 dígitos
                $("#inputTelefono").on('input', function() {
                    let maxLength = 9; // Define la longitud máxima permitida

                    this.value = this.value.replace(/\D/g, ''); // Eliminada inmediatamente cualquier caracter no numérico

                    if (this.value.length > maxLength) {
                    this.value = this.value.slice(0, maxLength); // Limita la longitud del valor al máximo permitido
                    }
                });


                // Al no ser un campo obligatorio, solo se verifica que, de ingresarse un valor, este sea de 9 digitos y que empiece con 9 - si no se cumple, se da aviso apenas pasa a otro campo
                $("#inputTelefono").focusout(function() {
                    let telefono = $(this).val();

                    if (telefono.trim() !== '' && telefono < 900000000) {
                    $("#inputTelefono").addClass("is-invalid");
                    } else {
                    $("#inputTelefono").removeClass("is-invalid");
                    }
                    
                });

                // focus para que, en caso de haberse marcado en rojo previamente, el campo vuelva a su estado original apenas se haga click sobre él
                $("#inputTelefono").focus(function() {
                    
                    $("#inputTelefono").removeClass("is-invalid");
                    
                });

            // Mensaje
                // focus para que, en caso de haberse marcado en rojo previamente, el campo vuelva a su estado original apenas se haga click sobre él
                $("#inputMensaje").focus(function() {
                    
                    $("#inputMensaje").removeClass("is-invalid");
                    
                });

        // Validación final que se debe realizar cuando el usuario hace click en "Enviar"
        $("#btnEnviar").click(function() {
                
            // Variables con los valores de los input del usuario
            let nombre = $("#inputNombre").val();
            let apellido = $("#inputApellido").val();
            let correo = $("#inputEmail").val();
            let telefono = $("#inputTelefono").val();
            let mensaje = $("#inputMensaje").val();

            // Variable booleana para verificar si el envío del formularo es valido - se inicia en true, y cambia a false en caso de que un campo no cumpla con los requisitos
            let formularioValido = true;

            if (nombre.trim() == '') { // caso - campo obligatorio vacío
              $("#inputNombre").addClass("is-invalid");
              $("#nombreError").text("First name is required").show();
              formularioValido = false;
            } else if (!formatoNombres.test(nombre)) { // caso - usuario puso números y/o caracteres especiales
              $("#inputNombre").addClass("is-invalid");
              $("#nombreError").text("Por favor ingrese un nombre válido.").show();
              formularioValido = false;
            }

            if (apellido.trim() == '') { // caso - campo obligatorio vacío
              $("#inputApellido").addClass("is-invalid"); 
              $("#apellidoError").text("Last name is required").show();
              formularioValido = false;
            } else if (!formatoNombres.test(apellido)) { // caso - usuario puso números y/o caracteres especiales
              $("#inputApellido").addClass("is-invalid");
              $("#apellidoError").text("Por favor ingrese un apellido válido.").show();
              formularioValido = false;
            }

            if (correo.trim() == '') { // caso - campo obligatorio vacío
              $("#inputEmail").addClass("is-invalid");
              $("#emailError").text("E-mail address is required").show();
              formularioValido = false;
            } else if (!formatoCorreo.test(correo)) { // caso - no se cumple con el formato de correo electrónico
              $("#inputEmail").addClass("is-invalid");
              $("#emailError").text("Please, enter a valid e-mail address").show();
              formularioValido = false;
            }

            if (telefono.trim() !== '' && telefono < 900000000) { // no es obligatorio - se verifica que lo que se ingrese sea de 9 dígitos y que empiece con 9
              $("#inputTelefono").addClass("is-invalid");
              formularioValido = false;
            }
          
            if (mensaje.trim() == '') { // caso - campo obligatorio vacío
              $("#inputMensaje").addClass("is-invalid");
              formularioValido = false;
            }

            // Si todos los input fueron validados, entonces depliega un mensaje confirmando envío y limpia el formulario
            if (formularioValido) {
              mostrarConfirmaciónContacto();
              console.log("envío exitoso");
            }
          });

    // FIN FORMULARIO DE CONTACTO

});