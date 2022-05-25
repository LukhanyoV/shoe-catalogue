describe("Testing my shoe catalogue factory function", () => {
    describe("Get all the shoes function", () => {
        it("should get all the shoes", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'blue',
                    brand : "Mike",
                    price : 350,
                    size: 3,
                    in_stock : 5
                },
                {
                    color : 'orange',
                    brand : "Hadidas",
                    price : 275,
                    size: 4,
                    in_stock : 3
                },
                {
                    color : 'blue',
                    brand : "Hadidas",
                    price : 255,
                    size: 5,
                    in_stock : 1 
                },
                {
                    color : 'orange',
                    brand : "Mike",
                    price : 290,
                    size: 4,
                    in_stock : 4 
                },
                {
                    color : 'red',
                    brand : "Huma",
                    price : 270,
                    size: 3,
                    in_stock : 6 
                },
                {
                    color: 'orange',
                    brand: "Mike",
                    price: 250,
                    size: 3,
                    in_stock: 10
                }
            ]
            assert.deepEqual(expected, catalogue.getAllShoes())
        })
    })
    
    describe("Get shoes by brand function", () => {
        it("should get shoes with brand name \"Mike\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'blue',
                    brand : "Mike",
                    price : 350,
                    size: 3,
                    in_stock : 5
                },
                {
                    color : 'orange',
                    brand : "Mike",
                    price : 290,
                    size: 4,
                    in_stock : 4 
                },
                {
                    color: 'orange',
                    brand: "Mike",
                    price: 250,
                    size: 3,
                    in_stock: 10
                }
            ]
            assert.deepEqual(expected, catalogue.getShoesByBrand(catalogue.getAllShoes(), "Mike"))
        })

        it("should get shoes with brand name \"Huma\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'red',
                    brand : "Huma",
                    price : 270,
                    size: 3,
                    in_stock : 6 
                }
            ]
            assert.deepEqual(expected, catalogue.getShoesByBrand(catalogue.getAllShoes(), "HuMa"))
        })

        it("should get shoes with brand name \"Lukhanyo\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = []
            assert.deepEqual(expected, catalogue.getShoesByBrand(catalogue.getAllShoes(), "Lukhanyo"))
        })
    })

    describe("Get shoes by color function", () => {
        it("should get shoes with color name \"red\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'red',
                    brand : "Huma",
                    price : 270,
                    size: 3,
                    in_stock : 6 
                }
            ]
            assert.deepEqual(expected, catalogue.getShoesByColor(catalogue.getAllShoes(), "red"))
        })

        it("should get shoes with color name \"blue\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'blue',
                    brand : "Mike",
                    price : 350,
                    size: 3,
                    in_stock : 5
                },
                {
                    color : 'blue',
                    brand : "Hadidas",
                    price : 255,
                    size: 5,
                    in_stock : 1 
                }
            ]
            assert.deepEqual(expected, catalogue.getShoesByColor(catalogue.getAllShoes(), "blue"))
        })

        it("should get shoes with color name \"black\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = []
            assert.deepEqual(expected, catalogue.getShoesByColor(catalogue.getAllShoes(), "black"))
        })
    })

    describe("Get shoes by size function", () => {
        it("should get shoes with size \"4\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'orange',
                    brand : "Hadidas",
                    price : 275,
                    size: 4,
                    in_stock : 3
                },
                {
                    color : 'orange',
                    brand : "Mike",
                    price : 290,
                    size: 4,
                    in_stock : 4 
                }
            ]
            assert.deepEqual(expected, catalogue.getShoesBySize(catalogue.getAllShoes(), "4"))
        })

        it("should get shoes with size \"5\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'blue',
                    brand : "Hadidas",
                    price : 255,
                    size: 5,
                    in_stock : 1 
                }
            ]
            assert.deepEqual(expected, catalogue.getShoesBySize(catalogue.getAllShoes(), 5))
        })

        it("should get shoes with size \"10\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = []
            assert.deepEqual(expected, catalogue.getShoesBySize(catalogue.getAllShoes(), "10"))
        })
    })

    describe("Get shoes by multiple filters", () => {
        it("should get shoes that are \"orange\" in color and are from \"Mike\" brand", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'orange',
                    brand : "Mike",
                    price : 290,
                    size: 4,
                    in_stock : 4 
                },
                {
                    color: 'orange',
                    brand: "Mike",
                    price: 250,
                    size: 3,
                    in_stock: 10
                }
            ]
            const byColor = catalogue.getShoesByColor(catalogue.getAllShoes(), "orange")
            const results = catalogue.getShoesByBrand(byColor, "Mike")
            assert.deepEqual(expected, results)
        })

        it("should get shoes that are from \"Mike\" brand and size \"4\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'orange',
                    brand : "Mike",
                    price : 290,
                    size: 4,
                    in_stock : 4 
                }
            ]
            const byBrand = catalogue.getShoesByBrand(catalogue.getAllShoes(), "Mike")
            const results = catalogue.getShoesBySize(byBrand, 4)
            assert.deepEqual(expected, results)
        })

        it("should get shoes by brand \"Mike\", color \"orange\" and shoe size \"4\"", () => {
            const catalogue = ShoeCatalogue()
            const expected = [
                {
                    color : 'orange',
                    brand : "Mike",
                    price : 290,
                    size: 4,
                    in_stock : 4 
                }
            ]
            const byBrand = catalogue.getShoesByBrand(catalogue.getAllShoes(), "Mike")
            const byColor = catalogue.getShoesByColor(byBrand, "orange")
            const results = catalogue.getShoesBySize(byColor, 4)
            assert.deepEqual(expected, results)
        })
    })
})