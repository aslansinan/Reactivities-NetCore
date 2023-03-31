using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities;

public class List
{
    public class Query:IRequest<List<Activity>> {}

    public class Handler : IRequestHandler<Query, List<Activity>>
    {
        private readonly Context _context;
        private readonly ILogger<List> _logger;

        public Handler(Context context, ILogger<List> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            // Cancelation token faza sürme durumunda yarıda kesme
            // try
            // {
            //     for (int i = 0; i < 10; i++)
            //     {
            //         cancellationToken.ThrowIfCancellationRequested();
            //         await Task.Delay(1000, cancellationToken);
            //         _logger.LogInformation($"Task {i} has comlated");
            //     }
            // }
            // catch (Exception e)
            // {
            //     _logger.LogInformation("task was cancelled");
            // }
            return await _context.Activities.ToListAsync();
        }
    }
}