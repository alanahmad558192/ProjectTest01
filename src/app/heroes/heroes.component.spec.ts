import { of } from "rxjs";
import { HeroComponent } from "../hero/hero.component"
import { HeroesComponent } from "./heroes.component"
import { COMPOSITION_BUFFER_MODE } from "@angular/forms";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe('HeroComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderDude', strength: 8 },
            {id: 2, name: 'Wonderful Women', strength: 24 },
            {id: 3, name: 'SuperDude', strength: 55 }
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

        component = new HeroesComponent(mockHeroService);
    });

    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });

    describe ('getHeroes', () => {
        it('should get hero from the heroes list', () => {
            mockHeroService.getHeroes.and.returnValue(of(HEROES));
            component.heroes = HEROES;

            component.ngOnInit();

            expect(component.heroes).toEqual(HEROES);
        });

        it('should retrieve the hero with the name "Wonderful Woman"', () => {
            const expectedHero = HEROES.find(hero => hero.name === 'Wonderful Women');
            mockHeroService.getHeroes.and.returnValue(of(HEROES));

            component.ngOnInit();

            expect(component.heroes).toContain(expectedHero);
        });
    });

    describe('add', () => {
        it('should add a new hero to the heroes list', () => {
            const newHeroName = 'Batman';
            const newHeroStrength = 22;
            const newHero = { id: 4, name: newHeroName, strength: newHeroStrength };
            mockHeroService.addHero.and.returnValue(of(newHero));
            component.heroes = []; // Initialize heroes array
    
            component.add(newHeroName);
    
            expect(component.heroes).toContain(newHero);
        });
    });

    describe('ngOnInit', () => {
        it('should call getHeroes method of heroService', () => {
            mockHeroService.getHeroes.and.returnValue(of(HEROES));

            component.ngOnInit();

            expect(mockHeroService.getHeroes).toHaveBeenCalled();
        });

        it('should get heroes from the service', () => {
            mockHeroService.getHeroes.and.returnValue(of(HEROES));

            component.ngOnInit();

            expect(component.heroes).toEqual(HEROES);
        });
    });
});