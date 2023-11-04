using SYWTourneyBot.Players.Core;
using SYWTourneyBot.Players.DAL.Services.Storage.HttpClients;
using SYWTourneyBot.Players.DAL.Services.Storage.Repositories;
using SYWTourneyBot.Players.Exchange.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddHttpClient<PlayersStorageServiceHttpClient>(x =>
{
    x.BaseAddress = new Uri("http://192.168.x.x:5000");
});
builder.Services.AddScoped<IPlayerDetailsRepo>(x => new PlayerDetailsRepo(x.GetService<PlayersStorageServiceHttpClient>() ?? throw new NotImplementedException($"{nameof(PlayersStorageServiceHttpClient)} is not registered as a service for dependency injection.")));
builder.Services.AddScoped<PlayerDetailsHandler>();

builder.Services.AddScoped<IRanksRepo>(x => new RanksRepo(x.GetService<PlayersStorageServiceHttpClient>() ?? throw new NotImplementedException($"{nameof(PlayersStorageServiceHttpClient)} is not registered as a service for dependency injection.")));
builder.Services.AddScoped<RanksHandler>();

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
