package MyWedding;
use Dancer ':syntax';
use Dancer::Plugin::Mongo;
use Template;
our $VERSION = '0.1';

my $col = mongo->get_database('test')->get_collection('wedding');

get '/index' => sub {
    my @rows = $col->find->sort( { time => 1 } )->limit(8)->all;
    template 'index.tt', {
        entries => \@rows,
	response => 'get',
    };
};

post '/index' => sub {
    $col->insert({
	name => params->{'name'},
	comment => params->{'comment'},
	time    => localtime,
    });
    my @rows = $col->find->sort( { time => 1 } )->limit(8)->all;	
    template 'index.tt', {
	entries => \@rows,
	response => 'post',
    };
};

get '/test' => sub {
    my @rows = $col->find->sort( { time => 1 } )->limit(8)->all;
    template 'test.tt', {
        entries => \@rows,
    };
};

true;
