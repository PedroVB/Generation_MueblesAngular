var app = angular.module("myApp", []);

var Item = function(name, route, url) {
    this.name = name;
    this.route = route;
    this.url = url;
}

app.controller("lineProducts", function($scope) {
    $scope.items = [
    item1 = new Item("Sillas", "img/sillas.jpg", "sillas.html"),
    item2 = new Item("Mesas", "img/mesas.png", "mesas.html"),
    item3 = new Item("Armarios", "img/armario.jpg", "armarios.html"),
    item4 = new Item("Lamparas", "img/lamparas.jpg", "lamparas.html")
    ]
});

var Element = function(name, route, description, tittle, active) {
    this.name = name;
    this.route = route;
    this.description = description;
    this.tittle = tittle;
    this.active = active;
}

app.controller("slider", function($scope) {
    $scope.elements = [
    element1 = new Element("oficina1", "img/escritorio1.jpg", "Te ayudamos a decorar tu Oficina a Precios increíbles", "Muebles de Oficina", "active"),
    element2 = new Element("oficina2", "img/lampara1.jpg", "Ponemos a su disposición una amplia variedad de modelos de sillas de oficina que tienen un denominador común: la calidad y la ergonomía", "Sillas de oficina", ""),
    element3 = new Element("oficina3", "img/oficina1.jpg", "Fundada hace 23 años y situada en Leganés (Madrid), cuenta con una superficie actual de 5.000 m2, dotada de una maquinaria avanzada y especializada para la correcta fabricación de muebles de oficina.", "La fabrica de muebles de oficina", ""),
    element4 = new Element("oficina4", "img/sillas1.jpg", "le permitirá dotar a su negocio de persianas, venecianas, estores, vinilos corporativos, rótulos, directorios y todo tipo de complementos de oficina", "Complementos de oficina", "")
    ]
});

var Partner = function(name, route) {
    this.name = name;
    this.route = route;
}

app.controller("associated", function($scope) {
    $scope.partners = [
    partner1 = new Partner("TOSHIBA", "img/toshiba.png"),
    partner2 = new Partner("MSI", "img/msi.png"),
    partner3 = new Partner("LG", "img/lg.png"),
    partner4 = new Partner("CANON", "img/canon.png"),
    partner5 = new Partner("HUAWEI", "img/huawei.png"),
    partner6 = new Partner("YOIGO", "img/yoigo.png")
    ]
});

app.directive("ngFooter", function() {
    return {
        restrict: 'A',
        templateUrl: './partials/footer.html'
    }
});

app.directive("ngNav", function() {
    return {
        restrict: 'A',
        templateUrl: './partials/nav.html'
    }
});

var Silla = function(name, route) {
    this.name = name;
    this.route = route;
}

app.controller("sillasGallery", function($scope) {
    $scope.sillas = [
    silla1 = new Silla("Silla1", "img/sillasGallery/photo1.jpg"),
    silla2 = new Silla("Silla2", "img/sillasGallery/photo2.png"),
    silla3 = new Silla("Silla3", "img/sillasGallery/photo3.jpg"),
    silla4 = new Silla("silla4", "img/sillasGallery/photo4.jpg"),
    silla5 = new Silla("silla5", "img/sillasGallery/photo5.jpg"),
    silla6 = new Silla("silla6", "img/sillasGallery/photo6.jpg"),
    silla7 = new Silla("silla7", "img/sillasGallery/photo7.png"),
    silla8 = new Silla("silla8", "img/sillasGallery/photo8.png")
    ]
});

var Mesa = function(name, route) {
    this.name = name;
    this.route = route;
}

app.controller("mesasGallery", function($scope) {
    $scope.mesas = [
    mesa1 = new Mesa("Mesa1", "img/mesasGallery/photo1.jpg"),
    mesa2 = new Mesa("Mesa2", "img/mesasGallery/photo2.jpg"),
    mesa3 = new Mesa("Mesa3", "img/mesasGallery/photo3.jpg"),
    mesa4 = new Mesa("Mesa4", "img/mesasGallery/photo4.jpg"),
    mesa5 = new Mesa("Mesa5", "img/mesasGallery/photo5.jpg"),
    mesa6 = new Mesa("Mesa6", "img/mesasGallery/photo6.jpg"),
    mesa7 = new Mesa("Mesa7", "img/mesasGallery/photo7.jpg"),
    mesa8 = new Mesa("Mesa8", "img/mesasGallery/photo8.jpg")
    ]
});

var Armario = function(name, route) {
    this.name = name;
    this.route = route;
}

app.controller("armariosGallery", function($scope) {
    $scope.armarios = [
    armario1 = new Mesa("armario1", "img/armarioGallery/photo1.jpg"),
    armario2 = new Mesa("armario2", "img/armarioGallery/photo2.jpg"),
    armario3 = new Mesa("armario3", "img/armarioGallery/photo3.jpg"),
    armario4 = new Mesa("armario4", "img/armarioGallery/photo4.jpg"),
    armario5 = new Mesa("armario5", "img/armarioGallery/photo5.jpg"),
    armario6 = new Mesa("armario6", "img/armarioGallery/photo6.jpg"),
    armario7 = new Mesa("armario7", "img/armarioGallery/photo7.jpg"),
    armario8 = new Mesa("armario8", "img/armarioGallery/photo8.jpg")
    ]
});

var Lampara = function(name, route) {
    this.name = name;
    this.route = route;
}

app.controller("lamparasGallery", function($scope) {
    $scope.lamparas = [
    lampara1 = new Lampara("lampara1", "img/lamparasGallery/photo1.jpg"),
    lampara2 = new Lampara("lampara2", "img/lamparasGallery/photo2.jpg"),
    lampara3 = new Lampara("lampara3", "img/lamparasGallery/photo3.jpg"),
    lampara4 = new Lampara("lampara4", "img/lamparasGallery/photo4.jpg"),
    lampara5 = new Lampara("lampara5", "img/lamparasGallery/photo5.JPG"),
    lampara6 = new Lampara("lampara6", "img/lamparasGallery/photo6.jpg"),
    lampara7 = new Lampara("lampara7", "img/lamparasGallery/photo7.jpg"),
    lampara8 = new Lampara("lampara8", "img/lamparasGallery/photo8.jpg")
    ]
});


app.controller('MainCtrl', function($scope) {
    $scope.formData = {};

    $scope.submitForm = function(formData) {
        $(".nameInput").val(" ");
    };
});