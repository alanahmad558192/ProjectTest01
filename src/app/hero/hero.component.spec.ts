import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { Hero } from '../hero';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

//Shallow Test for HeroComponent
describe('HeroComponent', () => {

    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas : [NO_ERRORS_SCHEMA],
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    });
    
    it('should render the hero name in an achor tag using nativeElement', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
        fixture.detectChanges();

        //test for nativeElement
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    });

    it('should render the hero name in an achor tag using debugElement', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
        fixture.detectChanges();

        //test for debugElement
        let de = fixture.debugElement.query(By.css('a'));
        expect(de.nativeElement.textContent).toContain('SuperDude');
    });
});