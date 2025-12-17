load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 080 activates: kills me');
  return {phase: 2.26421};
});

print('Mongoose OS Brain 080 online – hydrogen valve ready');
