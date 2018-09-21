import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSpritesComponent } from './pokemon-sprites.component';

describe('PokemonSpritesComponent', () => {
  let component: PokemonSpritesComponent;
  let fixture: ComponentFixture<PokemonSpritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSpritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSpritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
