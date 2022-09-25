using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using CatBreed.Data;
using Microsoft.EntityFrameworkCore;

namespace CatBreed.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatBreedController : ControllerBase
    {
        private readonly DataContext _context;

        public CatBreedController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<CatBreed>>> getCatBreed()
        {
            return Ok(await _context.CatBreeds.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<CatBreed>>> CreateCatBreed(CatBreed cat)
        {
            _context.CatBreeds.Add(cat);
            await _context.SaveChangesAsync();
            return Ok(await _context.CatBreeds.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<CatBreed>>> UpdateCatBreed(CatBreed cat)
        {
            var dbCat = await _context.CatBreeds.FindAsync(cat.id);
            if (dbCat == null)
                return BadRequest("Cat not found");

            dbCat.Name = cat.Name;
            dbCat.Breed = cat.Breed;
            dbCat.Color = cat.Color;

            await _context.SaveChangesAsync();

            return Ok(await _context.CatBreeds.ToListAsync());
        }

        [HttpDelete("{catId}")]
        public async Task<ActionResult<List<CatBreed>>> deleteCatBreed(int catId)
        {
            var dbCat = await _context.CatBreeds.FindAsync(catId);
            if (dbCat == null)
                return BadRequest("Cat not found");

            _context.CatBreeds.Remove(dbCat);
            await _context.SaveChangesAsync();
            return Ok(await _context.CatBreeds.ToListAsync());
        }






    }
}
