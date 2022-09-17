import { Controller, Get } from '@nestjs/common';
import {Movie, MoviesService} from "./movies.service";



@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getMovies(): Movie[] {
        return this.moviesService.getMovies();
    }
}
