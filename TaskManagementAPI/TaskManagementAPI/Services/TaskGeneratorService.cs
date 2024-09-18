using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;
using TaskManagementAPI.Models;

namespace TaskManagementAPI.Services
{
    //public class TaskGenerationService : IHostedService, IDisposable
    //{
        //private Timer _timer;
        //private readonly IServiceProvider _services;

        //public TaskGenerationService(IServiceProvider services)
        //{
        //    _services = services;
        //}

        //public System.Threading.Tasks.Task StartAsync(CancellationToken cancellationToken)
        //{
        //    _timer = new Timer(GenerateTasks, null, TimeSpan.Zero, TimeSpan.FromMinutes(1));
        //    return System.Threading.Tasks.Task.CompletedTask;
        //}

        //private async void GenerateTasks(object state)
        //{
        //    using (var scope = _services.CreateScope())
        //    {
        //        var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        //        var now = DateTime.UtcNow;
        //        var tasksToGenerate = await context.Tasks
        //            .Where(t => t.TimeToExecute <= now && !t.IsPartiallyFilled)
        //            .ToListAsync();

        //        foreach (var task in tasksToGenerate)
        //        {
        //            var newTask = new Models.Task
        //            {
        //                ProductGroupId = task.ProductGroupId,
        //                ControlPointId = task.ControlPointId,
        //                Frequency = task.Frequency,
        //                TimeToExecute = CalculateNextExecutionTime(task.Frequency, now),
        //                IsPartiallyFilled = true
        //            };

        //            context.Tasks.Add(newTask);
        //            context.TaskLogs.Add(new TaskLog
        //            {
        //                TaskId = newTask.TaskId,
        //                GenerationTime = now,
        //                Action = "Generated"
        //            });
        //        }

        //        await context.SaveChangesAsync();
        //    }
        //}

        //private DateTime CalculateNextExecutionTime(string frequency, DateTime now)
        //{
        //    // Implement logic to calculate the next execution time based on the frequency
        //    // This is a placeholder implementation
        //    return now.AddDays(1);
        //}

        //public System.Threading.Tasks.Task StopAsync(CancellationToken cancellationToken)
        //{
        //    _timer?.Change(Timeout.Infinite, 0);
        //    return System.Threading.Tasks.Task.CompletedTask;
        //}

        //public void Dispose()
        //{
        //    _timer?.Dispose();
        //}
    //}
}