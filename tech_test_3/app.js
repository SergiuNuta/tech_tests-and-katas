import brandStore from './brandStore';
import Color from './color';

class ThemeBuilder {
    constructor() {
        this.defaultFont = 'Lato';
        this.defaultColours = [
            { name: 'primary', value: '#333' },
            { name: 'secondary', value: '#222' },
            { name: 'tertiary', value: '#555' },
        ];

        this.allowedFonts = ['lato', 'arial', 'helvetica', 'courier'];
    }

    convertHexToRgb = hexColor => Color(hexColor);

    getRGBColour(colours) {
        return colours.reduce((obj, item) => {
            obj[item.name] = this.convertHexToRgb(item.value);
            return obj;
        }, {});
    }

    fontIsAllowed(fontName) {
        return this.allowedFonts.includes(fontName.toLowerCase());
    }

    build(colours = this.defaultColours, font = this.defaultFont) {
        return {
            colours: this.getRGBColour(colours),
            bodyFont: this.fontIsAllowed(font) ? font : this.defaultFont,
        };
    }
}

class BrandStore {
    constructor(store = brandStore) {
        this.store = store;
    }

    getAll() {
        return this.store.getAll();
    }

    getById(id) {
        const brands = this.getAll();
        return brands.find(brand => brand.id === id);
    }
}

export function getBranding(user) {
    const themeBuilder = new ThemeBuilder();
    const store = new BrandStore();

    const brand = user.brandId && store.getById(user.brandId);
    if (brand) return themeBuilder.build(brand.colours, brand.bodyFont);

    return themeBuilder.build();
}
